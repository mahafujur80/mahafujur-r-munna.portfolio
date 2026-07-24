import projectData from '@/assets/projects.json'

const siteUrl = 'https://mahafujur-r-munna.vercel.app'

export default function sitemap() {
  const projectUrls = projectData.map((project) => ({
    url: `${siteUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projectUrls,
  ]
}
