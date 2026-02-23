/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/landing",
                destination: "https://server.fayaport80.com/api/landing/show",
            },
        ];
    },
};

export default nextConfig;
