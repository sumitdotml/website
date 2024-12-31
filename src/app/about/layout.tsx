import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About me | sumit.ml',
    description: 'things about me in more detail',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 