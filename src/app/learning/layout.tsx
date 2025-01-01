import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Learnings | sumit.ml',
    description: 'A collection of my learning: weekly reflections, materials I use, and more.',
}

export default function Learning({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 