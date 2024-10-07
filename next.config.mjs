/** @type {import('next').NextConfig} */
const nextConfig = 
{
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://blinks-mini.vercel.app/:path*',
            },  
            {
                source: '/api/:path*',
                destination: 'https://blinks.knowflow.study/:path*',
            },
        ];
    },
}

export default nextConfig;
