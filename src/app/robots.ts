import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://wwww.seongwoon.app/sitemap.xml', // 실제 도메인으로 변경하세요
  }
} 