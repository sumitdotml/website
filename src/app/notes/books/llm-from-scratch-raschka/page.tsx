'use client'

import BaseContainer from "@/common-components/base-container/base-container";
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb";
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter";
import { StackVertical } from "@/common-components/layout-stack/layout-stack";
import Ruler from "@/common-components/ruler/ruler";
import TextHeading from "@/common-components/text-heading/text-heading";
import Text from "@/common-components/text/text";
import { ThemeToggle } from "@/styles/components/ui/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LLMFromScratchRaschka() {
    const pathname = usePathname();
    const chapter = pathname.split('/').pop();

    return (
        <>
        <BaseContainer size="md" paddingX="md" paddingY="lg">
        <StackVertical gap="md">
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb 
                items={[
                    { href: '/', label: 'Home', emoji: '👾' },
                    { href: '/notes', label: 'Notes' },
                    { href: '/notes/books', label: 'Books' },
                    { label: 'LLM From Scratch' }
                ]} 
            />
            <ThemeToggle />
          </div>

        <article>
            <TextHeading as="h1">LLM From Scratch</TextHeading>
            <Text variant='muted' size='xs' className="mb-8">Last updated: December 31, 2024</Text>
            <StackVertical gap="md">
                <Text>
                    This is a book that I'm reading to gain a deeper understanding of LLMs.
                </Text>

                <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                <Text variant='red'>
                    The page is currently under construction. Every chapter link below is a placeholder.
                </Text>

                <Text>
                    I am planning to integrate MDX for each chapter notes since I took notes in Jupyter Notebooks for each chapter and it's too 面倒い to manually translate them into typescript. Too much work. Might as well just learn new concepts if I have the time to do all that
                </Text>

                <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                <Text className="hover:underline"><Link href={`/notes/books/llm-from-scratch-raschka/chapter-1`}>Chapter 1 Notes</Link></Text>
                <Text className="hover:underline"><Link href={`/notes/books/llm-from-scratch-raschka/chapter-2`}>Chapter 2 Notes</Link></Text>
                <Text className="hover:underline"><Link href={`/notes/books/llm-from-scratch-raschka/chapter-3`}>Chapter 3 Notes</Link></Text>
                <Text className="hover:underline"><Link href={`/notes/books/llm-from-scratch-raschka/chapter-4`}>Chapter 4 Notes</Link></Text>
                <Text className="hover:underline"><Link href={`/notes/books/llm-from-scratch-raschka/chapter-5`}>Chapter 5 Notes</Link></Text>
                <Text className="hover:underline"><Link href={`/notes/books/llm-from-scratch-raschka/chapter-6`}>Chapter 6 Notes</Link></Text>
            </StackVertical>
            </article>
        </StackVertical>
        </BaseContainer>
        <IndividualPageFooter sectionName={`Notes`} showToTop={false} />
        </>
    )
}