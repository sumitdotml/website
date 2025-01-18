import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'LLM from Scratch Notes | Books | sumit.ml',
    description: 'My notes and learnings from "Build a Large Language Model (from Scratch)" by Sebastian Raschka',
    openGraph: {
        title: 'LLM from Scratch Notes | Books | sumit.ml',
        description: 'My notes and learnings from "Build a Large Language Model (from Scratch)" by Sebastian Raschka',
        type: 'article',
        publishedTime: '2025-01-14T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LLM from Scratch Notes | Books | sumit.ml',
        description: 'My notes and learnings from "Build a Large Language Model (from Scratch)" by Sebastian Raschka',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 