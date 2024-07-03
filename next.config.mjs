/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";
const nextConfig = {};

export default bundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(nextConfig);
