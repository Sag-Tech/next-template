import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'test.com',
                protocol: 'https',
                port: '',
            },
        ],
    },
    reactStrictMode: false,
    env: {
        API_URL: process.env.API_URL,
    },
}

export default nextConfig
