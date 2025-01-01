'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter"

export default function WeeklyReflections() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/learning', label: 'Learning' },
                            { label: 'Weekly Reflections' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold">
                    Weekly Reflections
                </TextHeading>
                    <Text variant="muted" className="mb-8">
                        My attempt at documenting, reflecting on, and being grateful for what I learned each week in my pursuit of knowledge.
                    </Text>

                <StackVertical gap="md">
                    <TextHeading as="h4" weight="bold">
                        Week 1, 2025 (Jan 1st - Jan 5th)
                    </TextHeading>
                    <Text>
                        Currently in the middle of my vacation here, will be back to learning in a week. Feels bad :(
                    </Text>
                </StackVertical>
            </div>

            </StackVertical>

            <IndividualPageFooter sectionName={`Learning`} showToTop={false} />

        </BaseContainer>
    )
}

