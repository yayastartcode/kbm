import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix for cloudflare:sockets in PostgreSQL adapter
  webpack: (config, { webpack }) => {
    // Use IgnorePlugin to ignore problematic modules
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
    }))
    
    return config;
  },
  // Configure image domains
  images: {
    domains: [
      'images.unsplash.com', 
      'localhost', 
      'fabrica.ancorathemes.com',
      'www.vikingsprinkler.com',
      'www.nfpa.org',
      'upload.wikimedia.org',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
}

export default withPayload(nextConfig, { 
  // This helps with the build process
  devBundleServerPackages: false
})
