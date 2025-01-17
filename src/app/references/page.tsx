import { StackVertical } from "@/components/layout/layout-stack/layout-stack";

import BaseContainer from "@/components/layout/container/base-container";
import { ReferenceHeader } from "./_components/ReferenceHeader";
import { ReferenceCard } from "./_components/ReferenceCard";
import { references } from "./_data/posts";
import { SectionFooter } from "@/components/layout/footer/SectionFooter";
export default function References() {
    return (
        <>
            <BaseContainer size="md" paddingX="md" paddingY="lg">
                <StackVertical gap="md">
                    <ReferenceHeader />
                    <StackVertical gap="none">
                        {references.map((reference) => (
                            <ReferenceCard key={reference.id} post={reference} />
                        ))}
                    </StackVertical>
                </StackVertical>
            </BaseContainer>
            <SectionFooter color="purple" showToTop={false} />
        </>
    )
}