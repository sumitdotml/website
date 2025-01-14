'use client'

import { notFound } from 'next/navigation'
import { mdxComponents } from 'app/mdx-components'
import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter"
import { useEffect, useState } from 'react'

type MDXComponent = React.ComponentType<{ components: typeof mdxComponents }>
type Params = Promise<{ week: string }>

const weeks = ['week-2', 'week-1']

export default async function WeeklyReflectionPage({ params }: { params: Params }) {
    const [WeekContent, setWeekContent] = useState<MDXComponent | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        const loadContent = async () => {
            try {
                const { week } = await params
                if (!weeks.includes(week)) {
                    setError(true)
                    return
                }

                const content = await import(`../weeks/${week}.mdx`)
                setWeekContent(() => content.default)
            } catch (err) {
                setError(true)
            }
        }

        loadContent()
    }, [params])

    if (error) {
        return notFound()
    }

    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb
                        items={[
                            { href: "/", label: "Home", emoji: "👾" },
                            { href: "/learning", label: "Learning" },
                            { href: "/learning/weekly-reflections", label: "Weekly Reflections" },
                            { label: `Week ${(await params).week.split('-')[1]}` }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    {WeekContent && <WeekContent components={mdxComponents} />}
                </div>
            </StackVertical>

            <IndividualPageFooter parentPageName={`Reflections`} showToTop={false} />
        </BaseContainer>
    )
}