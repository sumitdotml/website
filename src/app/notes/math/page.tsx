'use client'

import { StackVertical } from "@/components/layout/layout-stack/layout-stack";
import BaseContainer from "@/components/layout/container/base-container";
import TextHeading from "@/components/ui/text-heading/text-heading";
import Text from "@/components/ui/text/text";
import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter";
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import Link from "next/link";

export default function MathReferences() {
    return (
        <>
            <BaseContainer size="md" paddingX="md" paddingY="lg">
                <StackVertical gap="md">
                    <div className="flex items-center justify-between">
                        <DynamicBreadcrumb
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/notes', label: 'Notes' },
                            { label: 'Math' }
                        ]}
                    />
                    <ThemeToggle />
                    </div>

                    <StackVertical gap="md">
                        <TextHeading as="h1" weight="bold">
                            Math References
                        </TextHeading>
                        <Text variant="red">
                            If you have somehow reached this page, you probably have too much time on your hands. But if it's a genuine mistake, click the link below to see all my math references.
                        </Text>
                        <Text className="underline font-bold hover:text-purple-500">
                            <Link href="https://sumitdotml.notion.site/math">This one</Link>
                        </Text>
                    </StackVertical>
                </StackVertical>    
            </BaseContainer>

            <IndividualPageFooter sectionName="Notes" showToTop={false} />

        </>
    )
}