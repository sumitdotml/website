import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Week 3, 2025 | Weekly Reflections | sumit.ml',
    description: 'My learning journey and reflections from Week 3 (Jan 14th - Jan 19th, 2025)',
    openGraph: {
        title: 'Week 3, 2025 | Weekly Reflections | sumit.ml',
        description: 'My learning journey and reflections from Week 3 (Jan 14th - Jan 19th, 2025)',
        type: 'article',
        publishedTime: '2025-01-20T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Week 3, 2025 | Weekly Reflections | sumit.ml',
        description: 'My learning journey and reflections from Week 3 (Jan 14th - Jan 19th, 2025)',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 
