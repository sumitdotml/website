import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My 2025 Resolution: Beyond the Roadmaps | sumit.ml',
    description: 'Beyond the Roadmaps, Beyond the Timelines - A reflection on learning efficiency',
    openGraph: {
        title: 'My 2025 Resolution: Beyond the Roadmaps | sumit.ml',
        description: 'Beyond the Roadmaps, Beyond the Timelines - A reflection on learning efficiency',
        type: 'article',
        publishedTime: '2025-01-14T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'My 2025 Resolution: Beyond the Roadmaps, Beyond the Timelines',
        description: 'A reflection on learning efficiency',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 