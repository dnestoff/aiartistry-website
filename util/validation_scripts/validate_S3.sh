# Run these commands and verify outputs
# Expected Results:
    # All commands return successful status codes (0)
    # Website endpoint returns HTTP 200
    # Test file is accessible via S3 website URL

AWS_BUCKET="aiartistry-website-dev-website"
AWS_REGION="us-east-1"

# 1. Check bucket exists and configuration
echo "Checking if bucket '$AWS_BUCKET' exists..."
aws s3api head-bucket --bucket "$AWS_BUCKET"
if [ $? -eq 0 ]; then
    echo "✓ Bucket exists"
else
    echo "✗ Bucket does not exist or is not accessible"
    exit 1
fi

echo -e "\nRetrieving bucket website configuration..."
aws s3api get-bucket-website --bucket "$AWS_BUCKET"
if [ $? -eq 0 ]; then
    echo "✓ Website configuration retrieved successfully"
else
    echo "✗ Failed to get website configuration"
    exit 1
fi

echo -e "\nRetrieving bucket policy..."
aws s3api get-bucket-policy --bucket "$AWS_BUCKET"
if [ $? -eq 0 ]; then
    echo "✓ Bucket policy retrieved successfully"
else
    echo "✗ Failed to get bucket policy"
    exit 1
fi

echo -e "\nRetrieving CORS configuration..."
aws s3api get-bucket-cors --bucket "$AWS_BUCKET"
if [ $? -eq 0 ]; then
    echo "✓ CORS configuration retrieved successfully"
else
    echo "✗ Failed to get CORS configuration"
    exit 1
fi

# 2. Test file upload and access
echo -e "\nCreating test file..."
echo "test" > test.txt
echo "Uploading test file to S3..."
aws s3 cp test.txt s3://$AWS_BUCKET/
if [ $? -eq 0 ]; then
    echo "✓ Test file uploaded successfully"
else
    echo "✗ Failed to upload test file"
    exit 1
fi

echo -e "\nTesting file access through S3 website endpoint..."
curl -s http://$AWS_BUCKET.s3-website-${AWS_REGION}.amazonaws.com/test.txt
if [ $? -eq 0 ]; then
    echo -e "\n✓ File accessible through website endpoint"
else
    echo -e "\n✗ Failed to access file through website endpoint"
    exit 1
fi

# 3. Verify website endpoint
echo -e "\nVerifying website endpoint..."
curl -I http://$AWS_BUCKET.s3-website-${AWS_REGION}.amazonaws.com/
if [ $? -eq 0 ]; then
    echo "✓ Website endpoint is accessible"
else
    echo "✗ Website endpoint is not accessible"
    exit 1
fi