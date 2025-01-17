'use client'

import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { SectionFooter } from "@/components/layout/footer/SectionFooter"
import Text from "@/components/ui/text/text"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import Link from "next/link"

export default function Notes() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'Notes' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                <div>
                <TextHeading as="h1" weight="bold">
                    Notes
                </TextHeading>
                <Text variant="muted" className="mb-8">
                    A collection of my notes on various topics.
                </Text>

                <StackVertical gap="lg">
                    <Text className="underline font-bold hover:text-purple-500">
                        <Link href="/notes/books/">My list of books</Link> 
                    </Text>
                </StackVertical>
            </div>
            </StackVertical>
            <SectionFooter color="purple" showToTop={false} />
        </BaseContainer>
    )
}