/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		ppr: 'incremental',
	},
	images: {
		remotePatterns: [
			{
				hostname: 'aytaobyattkijkfvyztb.supabase.co',
			}
		],
		formats: ['image/avif', 'image/webp'],
		
	},
};

module.exports = nextConfig;
