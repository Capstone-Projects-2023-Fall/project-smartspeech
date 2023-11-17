# Deployment

To run the Terraform Scripts you need a `terraform.tfvars` file in the current folder that looks like:

```shell
SmartSpeech_db_username="username"
SmartSpeech_db_password="password"
```

Then you can run the script via

```shell
terraform apply -var-file=terraform.tfvars --auto-approve
```
