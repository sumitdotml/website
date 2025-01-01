import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'LLM from Scratch Notes | sumit.ml',
    description: 'a book that I\'m reading to gain a deeper understanding of LLMs.',
}

export default function LLMFromScratchRaschka({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 