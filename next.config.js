/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true
    },
    images:{
        domains:['i.ibb.co','example.com'],
    }
}

module.exports = nextConfig
