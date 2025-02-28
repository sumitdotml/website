import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import WeekPage from './week-page'
import matter from 'gray-matter'

// Define page props interface
interface PageParams {
  params: Promise<{
    week: string;
  }>;
  searchParams?: Promise<{
    week?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: PageParams): Promise<Metadata> {
  // Await params since it's a Promise in Next.js 15
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  
  const weekParam = resolvedSearchParams?.week || resolvedParams.week as string;
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

export default async function Page({ params, searchParams }: PageParams) {
  // Await params since it's a Promise in Next.js 15
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  
  const weekParam = resolvedSearchParams?.week || resolvedParams.week as string;
  return <WeekPage weekParam={weekParam} />
}