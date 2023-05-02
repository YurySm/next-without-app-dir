/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  // basePath: '/red',
  // replace path static
  async rewrites() {
    return [
      {
        source: '/carimg/:path*',
        destination: 'http://localhost:4200/carimg/:path*'
      }
    ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/car/4',
  //       destination: '/car/5',
  //       // redirects all
  //       permanent: true
  //     }
  //   ]
  // },
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig
