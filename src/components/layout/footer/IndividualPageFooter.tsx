'use client'

import { usePathname } from 'next/navigation'
import { BaseFooter } from './BaseFooter'
import { FooterLink } from './_components/FooterLink'
import { FooterDivider } from './_components/FooterDivider'

interface IndividualPageFooterProps {
    sectionName?: string;
    parentPageName?: string;
    showToTop?: boolean;
    showParentPage?: boolean;
    showHomePage?: boolean;
    showSocialLinks?: boolean;
    showCopyright?: boolean;
}

export function IndividualPageFooter({ 
    sectionName,
    parentPageName,
    showToTop = true,
    showParentPage = true,
    showHomePage = true,
    showSocialLinks = true,
    showCopyright = true
}: IndividualPageFooterProps) {
    const pathname = usePathname()
    
    // Get the parent path and name dynamically if not provided
    const getParentInfo = () => {
        if (parentPageName) return { name: parentPageName, path: pathname.split('/').slice(0, -1).join('/') }
        
        const pathParts = pathname.split('/')
        // Remove empty string and current page
        const filteredParts = pathParts.filter(part => part)
        
        if (filteredParts.length <= 1) {
            return { name: sectionName || 'Home', path: '/' }
        }
        
        // Get parent path (one level up)
        const parentPath = '/' + filteredParts.slice(0, -1).join('/')
        
        // Format the parent name
        const parentName = filteredParts[filteredParts.length - 2]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        
        return { name: parentName, path: parentPath }
    }

    const { name: parentName, path: parentPath } = getParentInfo()

    const navigationLinks = (
        <div className="flex flex-wrap items-center justify-center gap-1">
            {showToTop && (
                <>
                    <FooterLink href="#top">To the Top</FooterLink>
                    {(showParentPage || showHomePage) && <FooterDivider />}
                </>
            )}
            {showParentPage && (
                <>
                    <FooterLink href={parentPath}>{parentName} Page</FooterLink>
                    {showHomePage && <FooterDivider />}
                </>
            )}
            {showHomePage && (
                <FooterLink href="/">Home Page</FooterLink>
            )}
        </div>
    )

    return (
        <BaseFooter 
            navigationLinks={navigationLinks}
            className="mt-6"
            showToTop={showToTop}
            showSectionName={showParentPage}
            showSocialLinks={showSocialLinks}
            showCopyright={showCopyright}
        />
    )
}