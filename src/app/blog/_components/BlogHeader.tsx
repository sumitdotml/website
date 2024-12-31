import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import Text from "@/common-components/text/text"
import TextHeading from "@/common-components/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"

export function BlogHeader() {
    return (
        <StackVertical gap="md">
            <title>Blog | sumit.ml</title>

            {/* Breadcrumb */}
            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '👾' },
                        { label: 'Blog' }
                    ]}
                />
                <ThemeToggle />
            </div>

            {/* Header Content */}
            <div>
                <TextHeading as="h1" weight="bold">
                    Blog
                </TextHeading>
                <Text variant="muted" size="sm">
                    Thoughts on programming, machine learning, and technology
                </Text>
            </div>
        </StackVertical>
    )
} 