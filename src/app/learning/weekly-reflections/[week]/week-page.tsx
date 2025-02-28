'use client'

import { mdxComponents } from '@/lib/mdx/mdx-components'
import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter"
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { monoFont } from '@/styles/fonts/fonts'

interface WeekPageProps {
  weekParam: string
}

export default function WeekPage({ weekParam }: WeekPageProps) {
  const weekNumber = weekParam.replace('week-', '')
  
  const Content = useMemo(() => {
    return dynamic(
      () => import(`../content/${weekParam}.mdx`).then(mod => {
        const Component = mod.default
        return (props: any) => <Component {...props} />
      }),
      {
        loading: () => <p className={`${monoFont.className} text-center mt-10 text-purple-500`}>Loading...</p>,
        ssr: true
      }
    )
  }, [weekParam])

  return (
    <BaseContainer size="md" paddingX="md" paddingY="lg">
      <StackVertical gap="md">
        <div className="flex items-center justify-between">
          <DynamicBreadcrumb 
            items={[
              { href: '/', label: 'Home', emoji: '👾' },
              { href: '/learning', label: 'Learning' },
              { href: '/learning/weekly-reflections', label: 'Weekly Reflections' },
              { label: `Week ${weekNumber}, ${new Date().getFullYear()}` }
            ]}
          />
          <ThemeToggle />
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <Content components={mdxComponents} />
        </div>
      </StackVertical>
      
      <IndividualPageFooter parentPageName="Weekly Reflections" showToTop={false} />
    </BaseContainer>
  )
} 