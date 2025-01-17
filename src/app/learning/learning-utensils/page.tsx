'use client'

import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import TextHeading from "@/components/ui/text-heading/text-heading"
import Text from "@/components/ui/text/text"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter"
import Link from "next/link"

export default function LearningUtensils() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { href: '/learning', label: 'Learning' },
                            { label: 'Learning Utensils' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold">
                    Learning Utensils
                </TextHeading>
                    <Text variant="muted" className="mb-8">
                        All my learning utensils for people that might be interested (idk why you'd be interested but here you go)
                    </Text>

                <StackVertical gap="md">
                    <Text><span className="font-bold">Keyboard:</span> <Link href="https://nuphy.com/products/air75-v2" className="underline hover:text-purple-500">Nuphy Air75 V2</Link></Text>
                    <Text><span className="font-bold">Notebook (physical):</span> Normal notebook from Muji Japan</Text>
                    <Text><span className="font-bold">Pen:</span> 0.5 black ink ballpoint pen from Muji Japan (same store as above)</Text>
                    <Text><span className="font-bold">Monitor:</span> <Link href="https://www.amazon.co.jp/gp/product/B08CDGS83Y/" className="underline hover:text-purple-500">Dell U2520DR</Link></Text>
                    <Text><span className="font-bold">Math website I use:</span> <Link href="https://mathacademy.com" className="underline hover:text-purple-500">Math Academy</Link></Text>
                    
                </StackVertical>
            </div>

            </StackVertical>

            <IndividualPageFooter sectionName={`Learning`} showToTop={false} />

        </BaseContainer>
    )
}