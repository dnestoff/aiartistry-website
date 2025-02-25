# Terraform Infrastructure Setup

This Terraform configuration manages the infrastructure for a static website hosted on AWS S3 with CloudFront distribution.

## Infrastructure Components

The main.tf file creates the following AWS resources:

- S3 Bucket for website hosting
- CloudFront Distribution with:
  - Custom cache policy
  - HTTPS redirection
  - Custom error handling for SPA routing
  - Brotli/Gzip compression
  - Optional custom domain support
- ACM Certificate for SSL/TLS (when using custom domain)
- AWS CodePipeline for CI/CD
- Required IAM roles and policies

## Terraform State Management

This project uses a child Terraform project (in the `terraform-state` directory) to create and manage the S3 bucket used for storing Terraform state files. This ensures state files are stored remotely and can be accessed by team members.

## Usage

To deploy the infrastructure:

1. Run `terraform plan -var-file="dev.tfvars"` to preview the changes that will be made to your infrastructure. This command shows what resources will be created, modified, or deleted without actually making any changes.

2. Run `terraform apply -var-file="dev.tfvars"` to create/update the infrastructure. This command will show the planned changes again and prompt for confirmation before making any actual changes.

The `-var-file="dev.tfvars"` flag loads environment-specific variables from the dev.tfvars file. 

Use `prod.tfvars` instead to deploy to production.

### Prerequisites

Before running Terraform commands, you need to create or set up your GitHub OAuth token. Export it as an environment variable:

```## On Linux/MacOS, set OAuth
export TF_VAR_github_token='your_new_token_here'```