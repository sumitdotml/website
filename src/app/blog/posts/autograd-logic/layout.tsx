import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Autograd Logic | sumit.ml',
    description: 'the logic behind how autograd links to optimization through loss minimization',
    openGraph: {
        title: 'Autograd Logic | sumit.ml',
        description: 'the logic behind how autograd links to optimization through loss minimization',
        type: 'article',
        publishedTime: '2025-02-24T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Autograd Logic',
        description: 'the logic behind how autograd links to optimization through loss minimization',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 