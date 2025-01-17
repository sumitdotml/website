import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Learnings | sumit.ml',
    description: 'My journey of learning ML and Math, documented week by week',
    openGraph: {
        title: 'My Learnings | sumit.ml',
        description: 'My journey of learning ML and Math, documented week by week',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'My Learnings | sumit.ml',
        description: 'My journey of learning ML and Math, documented week by week',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 