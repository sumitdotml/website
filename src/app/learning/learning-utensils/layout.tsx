import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Learning Utensils | sumit.ml',
    description: 'Tools, resources, and materials I use in my learning journey',
    openGraph: {
        title: 'Learning Utensils | sumit.ml',
        description: 'Tools, resources, and materials I use in my learning journey',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Learning Utensils | sumit.ml',
        description: 'Tools, resources, and materials I use in my learning journey',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 