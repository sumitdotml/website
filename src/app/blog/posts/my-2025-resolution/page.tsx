'use client'

import Content from './content.mdx'
import { mdxComponents } from 'app/mdx-components'
import BaseContainer from '@/common-components/base-container/base-container'
import { StackVertical } from '@/common-components/layout-stack/layout-stack'
import { DynamicBreadcrumb } from '@/common-components/breadcrumb/breadcrumb'
import { ThemeToggle } from '@/styles/components/ui/theme-toggle'
import { IndividualPageFooter } from '@/common-components/footer/IndividualPageFooter'

export default function MySelfReflectionFor2025() {
  return (
    <>
      <BaseContainer size="md" paddingX="md" paddingY="lg">
        <StackVertical gap="md">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb 
              items={[
                { href: '/', label: 'Home', emoji: '👾' },
                { href: '/blog', label: 'Blog' },
                { label: 'My 2025 Resolution' }
              ]}
            />
            <ThemeToggle />
          </div>

          {/* MDX Content */}
          <div className="prose dark:prose-invert max-w-none">
            <Content components={mdxComponents} />
          </div>
        </StackVertical>
      </BaseContainer>

      <IndividualPageFooter parentPageName='Blog' />
    </>
  )
}