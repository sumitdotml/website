import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Week 7, 2025 | Weekly Reflections | sumit.ml',
    description: 'My learning journey and reflections from Week 7 (Feb 10 - Feb 16, 2025)',
    openGraph: {
        title: 'Week 7, 2025 | Weekly Reflections | sumit.ml',
        description: 'My learning journey and reflections from Week 7 (Feb 10 - Feb 16, 2025)',
        type: 'article',
        publishedTime: '2025-02-16T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Week 7, 2025 | Weekly Reflections',
        description: 'My learning journey and reflections from Week 7 (Feb 10 - Feb 16, 2025)',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 
