/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  // Se usa imagens externas, configure domains aqui:
  // images: { domains: ['...'] },
};
module.exports = nextConfig;
