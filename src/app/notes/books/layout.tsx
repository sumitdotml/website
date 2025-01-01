import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Books | sumit.ml',
    description: 'A collection of books I\'ve read and taken notes on.',
}

export default function Books({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 