/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
  // Enable React Strict Mode for better error handling and debugging
  reactStrictMode: true,

  // Add custom redirects, rewrites, and headers
  async redirects() {
    return [
      {
        source: '/old-url', // Redirect from an old URL
        destination: '/new-url', // Redirect to a new URL
        permanent: true, // Permanent redirect
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/old-booking', // Source path
        destination: '/new-booking', // Destination path
      },
    ];
  },

  // Add headers for security purposes (e.g., Content Security Policy, etc.)
  async headers() {
    return [
      {
        source: '/:path*', // Apply this rule to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Prevent embedding in iframes
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Enable XSS protection
          },
        ],
      },
    ];
  },

  // Add allowed image domains for external sources (e.g., CDNs)
  images: {
    domains: ['yourdomain.com'], // Replace with your allowed domains
  },

  // Add environment variables to be used within the app
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
  },

  // Configure static file handling or custom routing paths
  async headers() {
    return [
      {
        source: '/public/:path*', // Static files from the 'public' directory
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache static files
          },
        ],
      },
    ];
  },

  // Optional: Enable Internationalization (i18n) for multi-language support
  i18n: {
    locales: ['en', 'fr'], // List supported languages
    defaultLocale: 'en',
  },

  // Optional: Set up a custom base path if deploying to a subfolder
  // basePath: '/restaurant-booking',

  // If you're using custom Webpack configurations, include them here
  webpack(config) {
    // Example: Add custom rule for a particular file type
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

