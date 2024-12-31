import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import Text from "@/common-components/text/text"
import TextHeading from "@/common-components/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"

export function ReferenceHeader() {
    return (
        <StackVertical gap="md">
            <title>References | sumit.ml</title>

            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '👾' },
                        { label: 'References' }
                    ]}
                />
                <ThemeToggle />
            </div>

            <div>
                <TextHeading as="h1" weight="bold">
                    References
                </TextHeading>
                <Text variant="muted" size="sm">
                    A collection of references that I have collected from my learning journey. Mostly Math and ML-related.
                </Text>
            </div>
        </StackVertical>
    )
} 