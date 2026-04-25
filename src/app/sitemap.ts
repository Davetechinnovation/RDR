import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rdrgeneralconstruction.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/projects', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
