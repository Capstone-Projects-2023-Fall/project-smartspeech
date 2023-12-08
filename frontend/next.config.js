/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
});

const nextConfig = withPWA({
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "smart-speech-media.s3.amazonaws.com",
                port: "",
            },
        ],
    },
});

module.exports = nextConfig;
