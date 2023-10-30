variable "default_labels" {
  type = map(string)
  default = {
    environment = "dev"
    app         = "smart-speech"
    sprint      = 2
  }
}

variable "vpc_info" {
  type = map(any)
  default = {
    "vpc_name" = "ss_primary_vpc"
    "vpc_cidr" = "10.0.0.0/16"
  }
}

variable "exposed_ecs_ports" {
  type    = list(number)
  default = [8000]
}

#! Full deployment
variable "is_full_deployment" {
  type        = bool
  default     = false
  description = "When we want a full deployment with LBs and ECS FG Services, set to true"
}

variable "vpc_subnet_info" {
  type = map(list(string))
  default = {
    "azs"                   = ["us-east-1a", "us-east-1b"]
    "private_subnet_blocks" = ["10.0.128.0/18", "10.0.192.0/18"]
    "public_subnet_blocks"  = ["10.0.0.0/18", "10.0.64.0/18"]
  }
}

variable "ecs_cluster_info" {
  type = map(string)
  default = {
    name : "smart-speech-backend-cluster"

  }
}

variable "ecs_backend_container_info" {
  type = map(any)
  default = {
    container_name : "ss-backend"
    container_port : 8000

  }
}

variable "docker_image_info" {
  type = map(string)
  default = {
    "name" = "parth099/smart-speech:0.1.2"
  }
}

variable "backend_service_info" {
  type = map(string)
  default = {
    "name" = "smart-speech-backend-service"
  }
}

variable "r53_domain_info" {
  type = map(string)
  default = {
    cert_domain = "smart-speech.backend-aws.com"
    domain      = "backend-aws.com"
  }
}
