import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import WeekPage from './week-page'
import matter from 'gray-matter'

export async function generateMetadata({ params, searchParams }: {
  params: { week: string }
  searchParams?: { week?: string }
}): Promise<Metadata> {
  const weekParam = searchParams?.week || params.week
  const weekNumber = parseInt(weekParam.replace('week-', ''), 10)
  
  // Read the MDX file to get the year
  const contentPath = path.join(process.cwd(), 'src/app/learning/weekly-reflections/content', `${weekParam}.mdx`)
  const content = fs.readFileSync(contentPath, 'utf8')
  const { content: mdxContent } = matter(content)
  
  // Extract year from the content
  const titleMatch = mdxContent.match(/# Week \d+, (\d{4})/)
  const year = titleMatch ? titleMatch[1] : new Date().getFullYear()
  
  const title = `Week ${weekNumber}, ${year} | Weekly Reflections`
  const description = `My learning journey and reflections from Week ${weekNumber}, ${year}`
  const url = `https://sumit.ml/learning/weekly-reflections/week-${weekNumber}`
  
  return {
    title,
    description,
    openGraph: {
      title: `Week ${weekNumber}, ${year} | Weekly Reflections | sumit.ml`,
      description,
      type: 'article',
      url
    },
    twitter: {
      card: 'summary_large_image',
      title: `Week ${weekNumber}, ${year} | Weekly Reflections`,
      description,
      site: '@sumitdotml',
      creator: '@sumitdotml'
    }
  }
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'src/app/learning/weekly-reflections/content')
  
  return fs.existsSync(contentDir) 
    ? fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.mdx'))
      .map(file => ({ week: file.replace('.mdx', '') }))
    : []
}

export default function Page({ params, searchParams }: {
  params: { week: string }
  searchParams?: { week?: string }
}) {
  const weekParam = searchParams?.week || params.week
  return <WeekPage weekParam={weekParam} />
}