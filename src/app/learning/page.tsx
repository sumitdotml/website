'use client'

import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { SectionFooter } from "@/components/layout/footer/SectionFooter"
import Text from "@/components/ui/text/text"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import Link from "next/link"

export default function Learning() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'Learning' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                <div>
                <TextHeading as="h1" weight="bold">
                    Learning
                </TextHeading>
                <Text variant="muted" className="mb-8">
                    A collection of my learning: weekly reflections, materials I use, and more.
                </Text>

                <StackVertical gap="md">
                    <Link 
                        href="/learning/weekly-reflections/"
                        className="group"
                    >
                        <Text 
                            size="md" 
                            className="underline font-bold transition-colors duration-200 group-hover:text-purple-500"
                        >
                            Weekly Reflections
                        </Text>
                    </Link>
                    <Link 
                        href="/learning/learning-utensils/"
                        className="group"
                    >
                        <Text 
                            size="md" 
                            className="underline font-bold transition-colors duration-200 group-hover:text-purple-500"
                        >
                            Learning Utensils
                        </Text>
                    </Link>
                </StackVertical>
            </div>
            </StackVertical>
            <SectionFooter color="purple" showToTop={false} />
        </BaseContainer>
    )
}