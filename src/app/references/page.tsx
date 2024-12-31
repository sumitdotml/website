import { StackVertical } from "@/common-components/layout-stack/layout-stack";

import BaseContainer from "@/common-components/base-container/base-container";
import { ReferenceHeader } from "./_components/ReferenceHeader";
import { ReferenceCard } from "./_components/ReferenceCard";
import { references } from "./_data/posts";
import { SectionFooter } from "@/common-components/footer/SectionFooter";
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