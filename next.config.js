/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['m.media-amazon.com', 'fakestoreapi.com'],
	},
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
