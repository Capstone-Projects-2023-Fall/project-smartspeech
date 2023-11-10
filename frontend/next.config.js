/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
});

const nextConfig = withPWA({
    reactStrictMode: false,
});

module.exports = nextConfig;
