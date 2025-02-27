/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages serves content from a repo name subdirectory
  // e.g., username.github.io/repo-name
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  // Disable image optimization since GitHub Pages doesn't support Next.js Image Optimization API
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

