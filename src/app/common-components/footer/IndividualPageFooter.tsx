'use client'

import { BaseFooter } from './BaseFooter'
import { FooterLink } from './components/FooterLink'
import { FooterDivider } from './components/FooterDivider'

interface IndividualPageFooterProps {
    sectionName: string;
    showToTop?: boolean;
    showSectionName?: boolean;
    showHomePage?: boolean;
    showSocialLinks?: boolean;
    showCopyright?: boolean;
}

export function IndividualPageFooter({ 
    sectionName,
    showToTop = true,
    showSectionName = true,
    showHomePage = true,
    showSocialLinks = true,
    showCopyright = true
}: IndividualPageFooterProps) {
    const navigationLinks = (
        <div className="flex flex-wrap items-center justify-center gap-1">
            {showToTop && (
                <>
                    <FooterLink href="#top">To the top</FooterLink>
                    {(showSectionName || showHomePage) && <FooterDivider />}
                </>
            )}
            {showSectionName && (
                <>
                    <FooterLink href={`/${sectionName.toLowerCase()}`}>{sectionName} page</FooterLink>
                    {showHomePage && <FooterDivider />}
                </>
            )}
            {showHomePage && (
                <FooterLink href="/">Home page</FooterLink>
            )}
        </div>
    )

    return (
        <BaseFooter 
            navigationLinks={navigationLinks}
            className="mt-6"
            showToTop={showToTop}
            showSectionName={showSectionName}
            showSocialLinks={showSocialLinks}
            showCopyright={showCopyright}
        />
    )
}