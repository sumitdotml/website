'use client'

import Notes from './notes.mdx'
import { mdxComponents } from 'app/mdx-components'
import BaseContainer from '@/common-components/base-container/base-container'
import { StackVertical } from '@/common-components/layout-stack/layout-stack'
import { DynamicBreadcrumb } from '@/common-components/breadcrumb/breadcrumb'
import { ThemeToggle } from '@/styles/components/ui/theme-toggle'
import { IndividualPageFooter } from '@/common-components/footer/IndividualPageFooter'

export default function Chapter1() {
  return (
    <>
      <BaseContainer size="md" paddingX="md" paddingY="lg">
        <StackVertical gap="md">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb 
              items={[
                { href: '/', label: 'Home', emoji: '👾' },
                { href: '/notes', label: 'Notes' },
                { href: '/notes/books', label: 'Books' },
                { href: '/notes/books/llm-from-scratch-raschka', label: 'LLM from Scratch' },
                { label: 'Chapter 1' }
              ]}
            />
            <ThemeToggle />
          </div>

          {/* MDX Content */}
          <div className="prose dark:prose-invert max-w-none">
            <Notes components={mdxComponents} />
          </div>
        </StackVertical>
      </BaseContainer>

      <IndividualPageFooter sectionName="Notes" />
    </>
  )
}