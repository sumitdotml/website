import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Learning Utensils | sumit.ml',
    description: 'All my learning utensils for people that might be interested',
}

export default function LearningUtensils({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 