'use client'

import { StackVertical } from "@/components/layout/layout-stack/layout-stack";
import BaseContainer from "@/components/layout/container/base-container";
import { notes } from "./_data/posts";
import { NotesCard } from "./_components/NotesCard";
import { NotesHeader } from "./_components/NotesHeader";
import { SectionFooter } from "@/components/layout/footer/SectionFooter";

export default function Notes() {
    return (
        <>
            <BaseContainer size="md" paddingX="md" paddingY="lg">
                <StackVertical gap="md">
                    <NotesHeader />
                    <StackVertical gap="none">
                        {notes.map((note, index) => (
                            <NotesCard 
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