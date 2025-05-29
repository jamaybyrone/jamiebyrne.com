import { MetadataRoute } from 'next'
import { HTTPS_WWW_MAIN_DOMAIN, WWW_MAIN_DOMAIN } from '@/shared/consts/url'
const { VERCEL_ACCESS_TOKEN } = process.env
async function getLastDeploy(): Promise<Date> {
  const result = await fetch(
    'https://api.vercel.com/v13/deployments/' + WWW_MAIN_DOMAIN,
    {
      next: { revalidate: 3600 },
      method: 'GET',
      headers: {
        Authorization: `Bearer ${VERCEL_ACCESS_TOKEN}`
      }
    }
  )

  const { ready } = await result.json()

  return new Date(ready)
}

function MainSitePages(lastBuild: Date): MetadataRoute.Sitemap {
  return [
    {
      url: HTTPS_WWW_MAIN_DOMAIN,
      lastModified: lastBuild,
      changeFrequency: 'yearly',
      priority: 1
    }
  ]
}

function GalleryPages(lastBuild: Date): MetadataRoute.Sitemap {
  return [
    {
      url: `${HTTPS_WWW_MAIN_DOMAIN}/pets`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${HTTPS_WWW_MAIN_DOMAIN}/landscapes`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${HTTPS_WWW_MAIN_DOMAIN}/macro`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${HTTPS_WWW_MAIN_DOMAIN}/wildlife`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${HTTPS_WWW_MAIN_DOMAIN}/night`,
      lastModified: lastBuild,
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastDeployed = await getLastDeploy()
  return [...MainSitePages(lastDeployed), ...GalleryPages(lastDeployed)]
}
