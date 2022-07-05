const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
    'firebase-auth',
    'helpers-front',
    'configs-front',
    'boilerplate-share',
    'lib-main'
])

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

const TM = withTM()

module.exports = withPlugins([
    [TM]],
nextConfig)
