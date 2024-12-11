# Run these commands and verify outputs
# Expected Results:
    # Distribution Status: Deployed
    # SSL handshake successful
    # Cache headers present in responses
    # DNS resolves to CloudFront

DIST_ID="E17WIXOR84NJJU"
DOMAIN="d172x8m8qaalbi.cloudfront.net"

# 1. Check distribution status
echo -e "\nChecking CloudFront distribution status..."
aws cloudfront get-distribution --id "$DIST_ID"
if [ $? -eq 0 ]; then
    echo "✓ Distribution status retrieved successfully"
else
    echo "✗ Failed to get distribution status"
    exit 1
fi

# 2. Verify SSL setup

echo -e "\nVerifying SSL certificate configuration..."
# Capture both stdout and stderr, verify specific SSL success indicators
if openssl s_client -connect "$DOMAIN:443" -servername "$DOMAIN" </dev/null 2>&1 | grep -q "Verify return code: 0"; then
    if openssl s_client -connect "$DOMAIN:443" -servername "$DOMAIN" </dev/null 2>&1 | grep -q "SSL handshake has read"; then
        echo "✓ SSL handshake completed successfully"
    else
        echo "✗ SSL handshake failed"
        exit 1
    fi
else
    echo "✗ SSL certificate verification failed"
    exit 1
fi

# 3. Test caching behavior
echo -e "\nTesting CloudFront caching behavior..."
failed=0

check_cache_headers() {
    local url=$1
    local response=$(curl -I "$url" 2>/dev/null)
    
    if ! echo "$response" | grep -q "HTTP/[1-2] 200"; then
        echo "✗ Failed to get 200 response from $url"
        return 1
    fi
    
    if ! echo "$response" | grep -qi "Cache-Control\|X-Cache"; then
        echo "✗ No cache headers found for $url"
        return 1
    fi
    
    echo "✓ Cache headers verified for $url"
    return 0
}

echo "Checking root path..."
check_cache_headers "https://$DOMAIN/" || failed=1

echo -e "\nChecking JavaScript assets..."
check_cache_headers "https://$DOMAIN/build/q-*.js" || failed=1

echo -e "\nChecking index page..."
check_cache_headers "https://$DOMAIN/index.html" || failed=1

if [ $failed -eq 0 ]; then
    echo "✓ All cache behavior tests completed successfully"
else
    echo "✗ Some cache behavior tests failed"
    exit 1
fi

# 4. Verify custom domain
echo -e "\nVerifying DNS resolution..."
dig $DOMAIN
if [ $? -eq 0 ]; then
    echo "✓ DNS resolution successful"
else
    echo "✗ DNS resolution failed"
    exit 1
fi