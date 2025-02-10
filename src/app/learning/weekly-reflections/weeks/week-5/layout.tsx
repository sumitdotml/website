import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Week 5, 2025 | Weekly Reflections | sumit.ml',
    description: 'My learning journey and reflections from Week 5 (Jan 27 - Feb 2, 2025)',
    openGraph: {
        title: 'Week 5, 2025 | Weekly Reflections | sumit.ml',
        description: 'My learning journey and reflections from Week 5 (Jan 27 - Feb 2, 2025)',
        type: 'article',
        publishedTime: '2025-02-02T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Week 5, 2025 | Weekly Reflections',
        description: 'My learning journey and reflections from Week 5 (Jan 27 - Feb 2, 2025)',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 
