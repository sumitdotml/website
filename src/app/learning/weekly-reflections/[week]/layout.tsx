import { Metadata } from 'next'
import { weeks } from '../_data/weeks'

interface WeekParams {
  params: {
    week: string
  }
}

// Helper to format date range for a given week number
function getDateRangeForWeek(weekNum: number) {
  // Find the week in the weeks array
  const weekData = weeks.find(w => w.href.includes(`week-${weekNum}`))
  if (weekData) {
    // Extract the date range from the title
    const dateMatch = weekData.title.match(/\((.*?)\)/)
    return dateMatch ? dateMatch[1] : 'Unknown date range'
  }
  return 'Unknown date range'
}

export async function generateMetadata({ params }: WeekParams): Promise<Metadata> {
  const weekParam = params.week
  const weekNumber = parseInt(weekParam.replace('week-', ''))
  const dateRange = getDateRangeForWeek(weekNumber)

  return {
    title: `Week ${weekNumber}, 2025 | Weekly Reflections | sumit.ml`,
    description: `My learning journey and reflections from Week ${weekNumber} (${dateRange})`,
    openGraph: {
      title: `Week ${weekNumber}, 2025 | Weekly Reflections | sumit.ml`,
      description: `My learning journey and reflections from Week ${weekNumber} (${dateRange})`,
      type: 'article',
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: `Week ${weekNumber}, 2025 | Weekly Reflections`,
      description: `My learning journey and reflections from Week ${weekNumber} (${dateRange})`,
    }
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}