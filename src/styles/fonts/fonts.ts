import { IBM_Plex_Mono, Geist } from 'next/font/google'

export const monoFont = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-mono',
})

export const sansFont = Geist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-sans',
})