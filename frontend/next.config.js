/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
});

const nextConfig = withPWA({
    reactStrictMode: true,
    output: 'standalone',
});

module.exports = nextConfig;
