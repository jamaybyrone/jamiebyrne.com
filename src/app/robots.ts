import type { MetadataRoute } from 'next'
import { HTTPS_WWW_MAIN_DOMAIN } from '@/shared/consts/url'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: HTTPS_WWW_MAIN_DOMAIN + '/sitemap.xml'
  }
}
