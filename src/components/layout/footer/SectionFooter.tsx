'use client'

import { BaseFooter } from './BaseFooter'
import { FooterLink } from './_components/FooterLink'
import { FooterDivider } from './_components/FooterDivider'

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
                    <FooterLink href="#top" color={color}>To the Top</FooterLink>
                    {showHomePage && <FooterDivider color={color} />}
                </>
            )}
            {showHomePage && (
                <FooterLink href="/" color={color}>Home Page</FooterLink>
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