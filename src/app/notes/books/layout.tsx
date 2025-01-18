import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Books | sumit.ml',
    description: 'Notes and summaries from the books I\'m reading to learn ML and Math',
    openGraph: {
        title: 'Books | sumit.ml',
        description: 'Notes and summaries from the books I\'m reading to learn ML and Math',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Books | sumit.ml',
        description: 'Notes and summaries from the books I\'m reading to learn ML and Math',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 