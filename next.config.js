/** @type {import('next').NextConfig} */
const {NODE_ENV} = process.env
const cspHeader = `
    default-src 'self' *.google-analytics.com esm.sh *.googleapis.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.dev.hdruk.cloud esm.sh;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src 'self' blob: data: *.prod.hdruk.cloud;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    frame-src 'self';
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
