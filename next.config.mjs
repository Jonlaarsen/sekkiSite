/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
          domains: ['tommychoi.s3.ap-northeast-2.amazonaws.com'],
        },
        // Enable experimental features for better caching
        experimental: {
          serverComponentsExternalPackages: ['@neondatabase/serverless'],
        },
};

export default nextConfig;
