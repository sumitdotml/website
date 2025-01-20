import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PyTorch References | Notes | sumit.ml',
    description: 'PyTorch code snippets and examples from my learning journey',
    openGraph: {
        title: 'PyTorch References | Notes | sumit.ml',
        description: 'PyTorch code snippets and examples from my learning journey',
        type: 'article',
        publishedTime: '2025-01-20T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PyTorch References | Notes | sumit.ml',
        description: 'PyTorch code snippets and examples from my learning journey',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 
