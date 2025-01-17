import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Novice Journey\'s Monologue | sumit.ml',
    description: 'I don\'t really know what I\'m doing',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 