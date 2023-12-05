# Deployment

## State Locking

In Terraform state-locking can be achived in a local manner or a remote manner. This repository is setup with a remote state-lock to multiple entities can add cloud resources at once. If you need to have this ablity you need to modify `terraform.tf` to set up state-locking via some service like `AWS S3`. If this is not the case you can **uncomment** the `local` block and **comment** out the `backend s3` block.

## Access Keys

You will first need to obtain AWS Access keys via AWS IAM (Identity and Access Management). Then save them to your machine via

```shell
aws configure --profile "personal-general"
```

The profile name `"personal-general"` is up to you, if you decide to use something else make sure you change any instances of `personal-general` in `main.tf` and `terraform.tf`

## Command

To run the Terraform Scripts you need a `terraform.tfvars` file in the current folder that looks like:

```shell
SmartSpeech_db_username="username"
SmartSpeech_db_password="password"
```

Then you can run the script via

```shell
terraform init
terraform apply -var-file=terraform.tfvars --auto-approve
```
