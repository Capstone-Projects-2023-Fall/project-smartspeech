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
  default = [3000]
}

variable "vpc_subnet_info" {
  type = map(list(string))
  default = {
    "azs"                   = ["us-east-1a", "us-east-1b"]
    "private_subnet_blocks" = ["10.0.128.0/18", "10.0.192.0/18"]
    "public_subnet_blocks"  = ["10.0.0.0/18", "10.0.64.0/18"]
  }
}
