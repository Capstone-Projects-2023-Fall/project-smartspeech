terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }

  # backend "local" {

  # }

  backend "s3" {
    bucket         = "perma-terraform-state-bucket"
    dynamodb_table = "state-lock-smartspeech"
    key            = "SmartSpeech/TF/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    profile        = "personal-general"
  }
}

