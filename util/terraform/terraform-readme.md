# AWS Infrastructure Setup

This directory contains Terraform configurations to set up the required AWS infrastructure for the website deployment.

## Prerequisites

1. [Terraform](https://www.terraform.io/downloads.html) installed (version >= 1.0)
2. AWS CLI configured with appropriate credentials
3. S3 bucket for Terraform state (optional, for production use)

## Directory Structure

```
util/
├── terraform/
│   ├── main.tf              # Main infrastructure configuration
│   ├── variables.tf         # Variable definitions
│   ├── terraform.tfvars.example  # Example variables file
│   ├── dev.tfvars          # Development environment variables
│   └── prod.tfvars         # Production environment variables
```

## Usage

1. Copy and customize the variables file:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Initialize Terraform:
   ```bash
   terraform init
   ```

3. For development environment:
   ```bash
   terraform plan -var-file="dev.tfvars"
   terraform apply -var-file="dev.tfvars"
   ```

4. For production environment:
   ```bash
   terraform plan -var-file="prod.tfvars"
   terraform apply -var-file="prod.tfvars"
   ```

## Features

- S3 bucket with static website hosting
- CloudFront distribution
- Optional custom domain support
- Environment-specific configurations
- Secure defaults

## Important Notes

1. The S3 bucket name will be automatically generated using the pattern: `{project_name}-{environment}-website`
2. CloudFront uses the most cost-effective price class for development
3. For production, update the `prod.tfvars` with your custom domain and ACM certificate ARN
4. The CloudFront distribution may take up to 30 minutes to deploy

## Clean Up

To destroy the infrastructure:
```bash
terraform destroy -var-file="dev.tfvars"
```

## Security Considerations

1. S3 bucket is publicly accessible but only through CloudFront
2. HTTPS is enforced for all traffic
3. TLS 1.2 is required for all connections
4. Geo-restrictions can be added if needed

## Outputs

- `website_bucket_name`: Name of the created S3 bucket
- `cloudfront_distribution_id`: ID of the CloudFront distribution
- `cloudfront_domain_name`: Domain name of the CloudFront distribution
