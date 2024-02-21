/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_URL: process.env.DATABASE_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tailwindui.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
            },
        ],
    },
};

module.exports = nextConfig;