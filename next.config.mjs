/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // disables Lightning CSS, uses PostCSS instead
  },
};

export default nextConfig;
