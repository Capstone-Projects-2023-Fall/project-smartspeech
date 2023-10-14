provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["~/.aws/credentials"]
  profile                  = "personal-general"
}

# Networking
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = var.vpc_info.vpc_name
  cidr = var.vpc_info.vpc_cidr

  azs             = var.vpc_subnet_info.azs
  private_subnets = var.vpc_subnet_info.private_subnet_blocks
  public_subnets  = var.vpc_subnet_info.public_subnet_blocks

  map_public_ip_on_launch = true
  enable_nat_gateway      = var.is_full_deployment

  nat_eip_tags = merge(var.default_labels, {
    "Name" = "SS-nat-eip"
  })
  nat_gateway_tags = merge(var.default_labels, {
    "Name" = "SS-natgw"
  })

  create_igw = true
  igw_tags = merge(var.default_labels, {
    "Name" = "SS-igw-main"
  })

  tags = merge(var.default_labels, {})
}

resource "aws_security_group" "allow_web_sg" {
  name   = "Allow SSH and HTTP from anywhere"
  vpc_id = module.vpc.vpc_id

  ingress {
    description = "SSH from anywhere"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "80 from anywhere"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "443 from anywhere"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  dynamic "ingress" {
    for_each = var.exposed_ecs_ports
    content {
      description = "${ingress.value} (ECS) from anywhere"
      from_port   = ingress.value
      to_port     = ingress.value
      protocol    = "tcp"
      cidr_blocks = ["0.0.0.0/0"] # Allow traffic from anywhere, consider restricting as needed
    }
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = merge(var.default_labels, {
    Name = "SS-allow-all-web-SG"
  })
}
