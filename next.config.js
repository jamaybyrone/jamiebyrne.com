/** @type {import('next').NextConfig} */
const {NODE_ENV} = process.env
const cspHeader = `
    default-src 'self' *.google-analytics.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    frame-src 'self' *.paypal.com;
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
const common = {
  images: {
    unoptimized: true
  }
}

let nextConfig

if (NODE_ENV === 'development') {
  nextConfig = {
    logging: {
      fetches: {
        fullUrl: true
      }
    },
    ...common
  }
} else {
  nextConfig = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: cspHeader.replace(/\n/g, '')
            }
          ]
        }
      ]
    },
    ...common
  }
}


module.exports = nextConfig
