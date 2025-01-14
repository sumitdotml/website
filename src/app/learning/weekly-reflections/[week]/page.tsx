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

const weeks = ['week-2', 'week-1'] // Add more weeks as needed

export default function WeeklyReflectionPage({ params }: { params: { week: string } }) {
    const [WeekContent, setWeekContent] = useState<MDXComponent | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!weeks.includes(params.week)) {
            setError(true)
            return
        }

        const loadWeek = async () => {
            try {
                const content = await import(`../weeks/${params.week}.mdx`)
                setWeekContent(() => content.default)
            } catch (err) {
                setError(true)
            }
        }

        loadWeek()
    }, [params.week])

    if (error) {
        return notFound()
    }

    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb
                        items={[
                            { href: "/", label: "Home", emoji: "👾" },
                            { href: "/learning", label: "Learning" },
                            { href: "/learning/weekly-reflections", label: "Weekly Reflections" },
                            { label: `Week ${params.week.split('-')[1]}` }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* MDX Content */}
                <div className="prose dark:prose-invert max-w-none">
                    {WeekContent && <WeekContent components={mdxComponents} />}
                </div>
            </StackVertical>

            <IndividualPageFooter parentPageName={`Reflections`} showToTop={false} />
        </BaseContainer>
    )
} 