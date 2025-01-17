'use client'

import { BaseFooter } from './BaseFooter'
import { FooterLink } from './_components/FooterLink'

interface HomepageFooterProps {
    color?: string;
    showToTop?: boolean;
    showSocialLinks?: boolean;
    showCopyright?: boolean;
}

export function HomepageFooter({ 
    color = 'purple',
    showToTop = true,
    showSocialLinks = true,
    showCopyright = true
}: HomepageFooterProps) {
    const navigationLinks = showToTop ? (
        <FooterLink href="#top" color={color}>To the Top</FooterLink>
    ) : null

    return (
        <BaseFooter 
            color={color}
            navigationLinks={navigationLinks}
            className="mt-6"
            showToTop={showToTop}
            showSocialLinks={showSocialLinks}
            showCopyright={showCopyright}
        />
    )
}