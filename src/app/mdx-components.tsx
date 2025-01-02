'use client'

import { MDXComponents } from 'mdx/types'
import TextHeading from '@/common-components/text-heading/text-heading'
import Text from '@/common-components/text/text'
import { List, ListItem } from '@/common-components/list/list'
import Ruler from '@/common-components/ruler/ruler'
import { cn } from '@/styles/lib/utils'
import { monoFont } from '@/styles/fonts/fonts'

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
        <Text className="mb-4">
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
        <span className="font-bold text-purple-500">
            {children}
        </span>
    ),
    em: ({ children }) => (
        <span className="italic text-purple-400">
            {children}
        </span>
    ),
    code: ({ children }) => (
        <code className={cn(
            monoFont.className,
            "px-1.5 py-0.5 mx-0.5",
            "text-sm bg-purple-500/10",
            "rounded-md"
        )}>
            {children}
        </code>
    ),

    // Block elements
    blockquote: ({ children }) => (
        <blockquote className={cn(
            "pl-4 border-l-2 border-purple-500/50",
            "my-4 italic text-muted-foreground"
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
                "text-purple-500 hover:text-purple-400",
                "transition-colors duration-200",
                "underline underline-offset-4"
            )}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {children}
        </a>
    ),
} 