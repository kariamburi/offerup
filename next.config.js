/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        serverComponents: true
      },
    images: {
        domains: ['utfs.io'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'utfs.io',
            port: ''
          }
        ]
      }
}

module.exports = nextConfig
