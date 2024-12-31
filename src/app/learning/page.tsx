'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import { SectionFooter } from "@/common-components/footer/SectionFooter"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"
import Link from "next/link"
import Ruler from "@/common-components/ruler/ruler"

export default function Learning() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'Learning' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold">
                    Learning
                </TextHeading>
                <Text variant="muted" className="mb-8">
                    A collection of my learning: weekly reflections, materials I use, and more.
                </Text>

                <StackVertical gap="md">
                    <Text className="underline font-bold hover:text-purple-500">
                        <Link href="/learning/weekly-reflections/">Weekly Reflections</Link> 
                    </Text>
                    <Text className="underline font-bold hover:text-purple-500">
                        <Link href="/learning/learning-utensils/">Learning Utensils</Link>
                    </Text>
                </StackVertical>
            </div>
            </StackVertical>
            <SectionFooter color="purple" showToTop={false} />
        </BaseContainer>
    )
}