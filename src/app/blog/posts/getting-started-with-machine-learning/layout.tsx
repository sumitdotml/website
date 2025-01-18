import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Getting Started with Machine Learning | sumit.ml',
    description: 'A beginner\'s guide to starting your ML journey',
    openGraph: {
        title: 'Getting Started with Machine Learning | sumit.ml',
        description: 'A beginner\'s guide to starting your ML journey',
        type: 'article',
        publishedTime: '2025-01-14T00:00:00.000Z',
        images: [
        {
                url: '/blog/posts/getting-started-with-machine-learning/opengraph-image.png',
                width: 1200,
                height: 630,
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Getting Started with Machine Learning',
        description: 'A beginner\'s guide to starting your ML journey',
        images: ['/blog/posts/getting-started-with-machine-learning/twitter-image.png'],
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 