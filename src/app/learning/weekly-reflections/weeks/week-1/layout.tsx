import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Week 1, 2025 | Weekly Reflections | sumit.ml',
    description: 'My learning journey and reflections from Week 1 (Jan 1 - Jan 5, 2025)',
    openGraph: {
        title: 'Week 1, 2025 | Weekly Reflections | sumit.ml',
        description: 'My learning journey and reflections from Week 1 (Jan 1 - Jan 5, 2025)',
        type: 'article',
        publishedTime: '2025-01-05T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Week 1, 2025 | Weekly Reflections',
        description: 'My learning journey and reflections from Week 1 (Jan 1 - Jan 5, 2025)',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 