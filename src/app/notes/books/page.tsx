'use client'

import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import TextHeading from "@/components/ui/text-heading/text-heading"
import Text from "@/components/ui/text/text"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter"
import Link from "next/link"

export default function Books() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/notes', label: 'Notes' },
                            { label: 'Books' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                <div>
                <TextHeading as="h1" weight="bold">
                    Books
                </TextHeading>
                    <Text variant="muted" className="mb-8">
                        A collection of books I've read and taken notes on.
                    </Text>

                <StackVertical gap="md">
                    <Text className="underline font-bold hover:text-purple-500">
                        <Link href="/notes/books/llm-from-scratch-raschka/">LLMs From Scratch by Sebastian Raschka</Link>
                    </Text>
                    <Text variant = 'red'>
                        ^The pages within this section are currently under construction.
                    </Text>
                </StackVertical>
            </div>

            </StackVertical>

            <IndividualPageFooter sectionName={`Notes`} showToTop={false} />

        </BaseContainer>
    )
}

