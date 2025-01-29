import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import Text from "@/components/ui/text/text"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"

export function NotesHeader() {
    return (
        <StackVertical gap="md">
            <title>Notes | sumit.ml</title>

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
                <Text variant="muted" size="sm">
                    A collection of notes that I have collected from my learning journey. Mostly Math and ML-related.
                </Text>
            </div>
        </StackVertical>
    )
} 