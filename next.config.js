/** @type {import('next').NextConfig} */
const process = require('process')
const path = require('path')

const {
    NEXT_PUBLIC_API_URL,
    NEXT_DEV_API_URL,
} = process.env

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    env: {
        NEXT_PUBLIC_API_URL,
        NEXT_DEV_API_URL,
    },
    async headers() {
        return [
            {
                source: '/favicon.ico',
                headers: [
                    {
                        key: 'Link',
                        value: '/favicon.jpeg',
                    },
                ],
            },
        ]
    }
}

module.exports = nextConfig
