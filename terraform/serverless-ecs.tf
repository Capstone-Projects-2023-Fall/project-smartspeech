provider "docker" {
  host = "unix:///var/run/docker.sock"
}

data "aws_iam_role" "ecs_task_execution_role" {
  name = "ecsTaskExecutionRole"
}

data "docker_image" "ss_backend_image" {
  name = var.docker_image_info.name
}

data "aws_acm_certificate" "backend_https_cert" {
  domain   = var.r53_domain_info.cert_domain
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "backend_zone" {
  name         = var.r53_domain_info.domain
  private_zone = false
}

locals {
  alb_name = "ss-backend-service-alb"
  tg_name  = "ss-backend-tg"
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
  cpu                      = 512 # 1024 CPU units = 1 vCPU
  execution_role_arn       = data.aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = data.aws_iam_role.ecs_task_execution_role.arn # will be diff if we attach external perms
  family                   = "ss-backend-tasks"
  memory                   = 3 * 1024 # in mib
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]

}

module "alb" {
  count   = var.is_full_deployment ? 1 : 0
  source  = "terraform-aws-modules/alb/aws"
  version = "~> 8.4.0"

  load_balancer_type = "application"
  security_groups    = [aws_security_group.allow_web_sg.id]
  subnets            = module.vpc.public_subnets # drop ALB in public subnet
  vpc_id             = module.vpc.vpc_id

  name = local.alb_name

  # allows for TLS off loading where our internal traffic within AWS is insecure yet external traffic is HTTPS
  https_listeners = [
    {
      port               = 443
      protocol           = "HTTPS"
      certificate_arn    = data.aws_acm_certificate.backend_https_cert.id
      target_group_index = 0
    }
  ]

  target_groups = [
    {
      backend_port     = var.ecs_backend_container_info.container_port
      backend_protocol = "HTTP"
      target_type      = "ip"
      health_check = {
        enabled             = true
        interval            = 60
        path                = "/health-check" # check for 2XX on this route
        port                = var.ecs_backend_container_info.container_port
        healthy_threshold   = 3
        unhealthy_threshold = 3
        timeout             = 6
        protocol            = "HTTP"
        matcher             = "200-299"
      }
    }
  ]

  tags = merge(var.default_labels, {
    Name = local.alb_name
  })

  target_group_tags = merge(var.default_labels, {
    Name = local.tg_name
  })
}

resource "aws_ecs_service" "ss_backend_service" {
  count           = var.is_full_deployment ? 1 : 0
  cluster         = module.ecs.cluster_id
  desired_count   = var.ecs_backend_container_info.desired_count
  launch_type     = "FARGATE"
  name            = var.backend_service_info.name
  task_definition = aws_ecs_task_definition.backend_task_def.arn

  lifecycle {
    ignore_changes = [desired_count] # Allow external changes to happen without Terraform conflicts, particularly around auto-scaling.
  }

  load_balancer {
    container_name   = var.ecs_backend_container_info.container_name
    container_port   = var.ecs_backend_container_info.container_port
    target_group_arn = module.alb[0].target_group_arns[0]
  }

  network_configuration {
    security_groups = [aws_security_group.allow_web_sg.id]
    subnets         = module.vpc.private_subnets # drop service in priv subnet for security
  }
}

resource "aws_route53_record" "backend_mapping" {
  count   = var.is_full_deployment ? 1 : 0
  zone_id = data.aws_route53_zone.backend_zone.zone_id
  name    = var.r53_domain_info.cert_domain
  type    = "CNAME"
  ttl     = 300
  records = [module.alb[0].lb_dns_name]
}

output "url_with_out_https" {
  value = var.is_full_deployment ? "http://${module.alb[0].lb_dns_name}" : "NULL"
}

output "url_with_https" {
  value = var.is_full_deployment ? "https://${var.r53_domain_info.cert_domain}" : "NULL"
}

