import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Autograd Logic | sumit.ml',
    description: 'Autograd Logic',
    openGraph: {
        title: 'Autograd Logic | sumit.ml',
        description: 'Autograd Logic',
        type: 'article',
        publishedTime: '2025-02-24T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Autograd Logic',
        description: 'Autograd Logic',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 