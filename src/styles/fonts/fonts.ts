import { IBM_Plex_Mono, Geist, Fira_Code } from 'next/font/google'

export const monoFont = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-mono',
    display: 'swap',
})

export const sansFont = Geist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-sans',
    display: 'swap',
})

export const codeFont = Fira_Code({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-code',
    display: 'swap',
})