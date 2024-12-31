'use client'

import { BaseFooter } from './BaseFooter'
import { FooterLink } from './components/FooterLink'
import { FooterDivider } from './components/FooterDivider'

interface SectionFooterProps {
    color?: string;
    showToTop?: boolean;
    showHomePage?: boolean;
    showSocialLinks?: boolean;
    showCopyright?: boolean;
}

export function SectionFooter({ 
    color = 'purple',
    showToTop = true,
    showHomePage = true,
    showSocialLinks = true,
    showCopyright = true
}: SectionFooterProps) {
    const navigationLinks = (
        <>
            {showToTop && (
                <>
                    <FooterLink href="#top" color={color}>To the top</FooterLink>
                    {showHomePage && <FooterDivider color={color} />}
                </>
            )}
            {showHomePage && (
                <FooterLink href="/" color={color}>Home page</FooterLink>
            )}
        </>
    )

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