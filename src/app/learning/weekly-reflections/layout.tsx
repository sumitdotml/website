import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Weekly Reflections | sumit.ml',
    description: 'My attempt at documenting, reflecting on, and being grateful for what I learned each week in my pursuit of knowledge',
}

export default function WeeklyReflections({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 