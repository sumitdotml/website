'use client'

import { MDXComponents } from 'mdx/types'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import { List, ListItem } from '@/components/ui/list/list'
import Ruler from '@/components/ui/ruler/ruler'
import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'
import CodeBlock from '@/components/blocks/code-block/code-block'

export const mdxComponents: MDXComponents = {
    // Headings
    h1: ({ children }) => (
        <TextHeading as="h1" weight="bold" className="mt-8 mb-4">
            {children}
        </TextHeading>
    ),
    h2: ({ children }) => (
        <TextHeading as="h2" weight="bold" className="mt-6 mb-3">
            {children}
        </TextHeading>
    ),
    h3: ({ children }) => (
        <TextHeading as="h3" weight="medium" className="mt-4 mb-2">
            {children}
        </TextHeading>
    ),
    h4: ({ children }) => (
        <TextHeading as="h4" weight="medium" className="mt-3 mb-2">
            {children}
        </TextHeading>
    ),

    // Paragraph
    p: ({ children }) => (
        <Text className="mb-4 text-foreground dark:text-foreground">
            {children}
        </Text>
    ),

    // Lists
    ul: ({ children }) => (
        <List className="mb-4">
            {children}
        </List>
    ),
    ol: ({ children }) => (
        <List type="ordered" className="mb-4">
            {children}
        </List>
    ),
    li: ({ children }) => (
        <ListItem>
            {children}
        </ListItem>
    ),

    // Inline text styling
    strong: ({ children }) => (
        <span className="font-bold text-foreground dark:text-foreground">
            {children}
        </span>
    ),
    em: ({ children }) => (
        <span className="italic text-muted-foreground dark:text-muted-foreground">
            {children}
        </span>
    ),
		code: ({ children, className }) => {
        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : '';

        if (!language) {
            // Inline code
            return (
                <code className={cn(
                    monoFont.className,
                    "px-1.5 py-0.5 mx-0.5 my-0.5",
                    "text-inherit",
                    "bg-purple-100/80 dark:bg-purple-900/50",
                    "text-purple-800 dark:text-purple-200",
                    "rounded-md",
                    "inline-block leading-normal"
                )}>
                    {children}
                </code>
            );
        }

        // Code block
        return (
            <CodeBlock 
                code={children as string} 
                language={language} 
            />
        );
    }, 

    // Block elements
    blockquote: ({ children }) => (
        <blockquote className={cn(
            "pl-4 border-l-2 border-purple-500/50",
            "my-4 italic",
            "text-muted-foreground/90 dark:text-muted-foreground/90"
        )}>
            {children}
        </blockquote>
    ),
    hr: () => <Ruler color="gray" marginTop="md" marginBottom="md" />,

    // Links
    a: ({ href, children }) => (
        <a 
            href={href} 
            className={cn(
                "text-purple-600 dark:text-purple-300",
                "hover:text-purple-700 dark:hover:text-purple-200",
                "transition-colors duration-200",
                "underline underline-offset-4",
                "decoration-purple-300/50 dark:decoration-purple-500/50",
                "hover:decoration-purple-400 dark:hover:decoration-purple-400"
            )}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {children}
        </a>
    ),
} 
