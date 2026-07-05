/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.ctfassets.net'],
    },
    // Don't fail the production build on lint warnings/errors (Vercel).
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Don't fail the production build on type errors (Vercel).
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
