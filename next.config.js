const { i18n } = require('./configs/i18n.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n
}

module.exports = nextConfig
