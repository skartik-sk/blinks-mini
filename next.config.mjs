/** @type {import('next').NextConfig} */
const nextConfig = 
{
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'https://blinks-mini.vercel.app/:path*',
    //         },  
    //         {
    //             source: '/api/:path*',
    //             destination: 'https://blinks.knowflow.study/:path*',
    //         },
    //     ];
    // },
}

export default nextConfig;
