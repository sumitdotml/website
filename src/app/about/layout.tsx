import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Novice Journey\'s Monologue | sumit.ml',
    description: 'I don\'t really know what I\'m doing',
    openGraph: {
        title: 'My Novice Journey\'s Monologue | sumit.ml',
        description: 'I don\'t really know what I\'m doing',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'My Novice Journey: A Monologue',
        description: 'I don\'t really know what I\'m doing',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 