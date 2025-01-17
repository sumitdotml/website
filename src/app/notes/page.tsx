'use client'

import { StackVertical } from "@/components/layout/layout-stack/layout-stack";
import BaseContainer from "@/components/layout/container/base-container";
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { notes } from "./_data/posts";
import { ReferenceCard } from "./_components/ReferenceCard";
import TextHeading from "@/components/ui/text-heading/text-heading";
import Text from "@/components/ui/text/text";
import { SectionFooter } from "@/components/layout/footer/SectionFooter";

export default function Notes() {
    return (
        <>
            <BaseContainer size="md" paddingX="md" paddingY="lg">
                <StackVertical gap="md">
                    <div className="flex items-center justify-between">
                        <DynamicBreadcrumb
                            items={[
                                { href: "/", label: "Home", emoji: "👾" },
                                { label: "Notes" }
                            ]}
                        />
                        <ThemeToggle />
                    </div>

                    <div>
                        <TextHeading as="h1" weight="bold">
                            Notes
                        </TextHeading>
                        <Text variant="muted" className="mb-8">
                            A collection of references and notes that I have collected from my learning journey. Mostly
                            Math and ML-related.
                        </Text>
                    </div>

                    <StackVertical gap="none">
                        {notes.map((note, index) => (
                            <ReferenceCard 
                                key={note.id} 
                                post={note} 
                                isLast={index === notes.length - 1}
                            />
                        ))}
                    </StackVertical>
                </StackVertical>
            </BaseContainer>
            <SectionFooter color="purple" showToTop={false} />
        </>
    )
}