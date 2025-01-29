import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"

export function BlogHeader() {
    return (
        <StackVertical gap="md">
            <title>Blog | sumit.ml</title>

            <div className="flex items-center justify-between">
                <DynamicBreadcrumb 
                    items={[
                        { href: '/', label: 'Home', emoji: '👾' },
                        { label: 'Blog' }
                    ]}
                />
                <ThemeToggle />
            </div>

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