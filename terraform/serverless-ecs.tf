provider "docker" {
  host = "unix:///var/run/docker.sock"
}

data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecsTaskExecutionRole"
}

data "docker_image" "ss_backend_image" {
  name = "parth099/smart-speech:0.0.1"
}


module "ecs" {
  source  = "terraform-aws-modules/ecs/aws"
  version = "~> 4.1.3"

  cluster_name = var.ecs_cluster_info.name

  cluster_settings = {
    "name" : "containerInsights",
    "value" : "disabled"
  }

  # * Allocate 20% capacity to FARGATE and then split
  # * the remaining 80% capacity 50/50 between FARGATE
  # * and FARGATE_SPOT.
  fargate_capacity_providers = {
    FARGATE = {
      default_capacity_provider_strategy = {
        base   = 20
        weight = 40
      }
    }
    FARGATE_SPOT = {
      default_capacity_provider_strategy = {
        weight = 60
      }
    }
  }

  tags = merge(var.default_labels, {
    Name = var.ecs_cluster_info.name
  })
}

resource "aws_ecs_task_definition" "backend_task_def" {
  # no need to spec 'hostPort' on network_mode="AWSVPC" since hostPost=containerPort
  container_definitions = jsonencode([{
    essential = true,
    image     = "${var.docker_image_info.name}",
    name      = "${var.ecs_backend_container_info.container_name}",
    portMappings = [
      {
        containerPort = tonumber(var.ecs_backend_container_info.container_port)
        portName      = "backend-8000-tcp"
        appProtocol   = "http"
      }
    ],
  }])
  cpu                      = 512
  execution_role_arn       = data.aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = data.aws_iam_role.ecs_task_execution_role.arn
  family                   = "ss-backend-tasks"
  memory                   = 1024
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
}
