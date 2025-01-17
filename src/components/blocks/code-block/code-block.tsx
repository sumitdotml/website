'use client'

import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'
import { Highlight } from 'prism-react-renderer'
import { useTheme } from 'next-themes'
import { useState } from 'react'

// Copy button component
const CopyButton = ({ code, language }: { code: string; language?: string }) => {
    const [copied, setCopied] = useState(false);
    const { theme: currentTheme } = useTheme();
    const isDark = currentTheme === 'dark' || (
        !currentTheme && 
        typeof window !== 'undefined' && 
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );
    
    const copy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <button
                onClick={copy}
                className={cn(
                    "absolute top-3 right-3",
                    "p-1.5 rounded-md",
                    "transition-all duration-300 ease-in-out",
                    "hover:bg-purple-500/10",
                    "z-10",
                    copied 
                        ? isDark
                            ? "text-purple-400"
                            : "text-[#8839ef]"
                        : "text-gray-400 hover:text-purple-400"
                )}
                aria-label="Copy code"
            >
                <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4">
                    <div className={cn(
                        "absolute inset-0 transform transition-all duration-300",
                        copied 
                            ? "opacity-0 rotate-45 scale-0" 
                            : "opacity-100 rotate-0 scale-100"
                    )}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    </div>
                    <div className={cn(
                        "absolute inset-0 transform transition-all duration-300",
                        copied 
                            ? "opacity-100 rotate-0 scale-100" 
                            : "opacity-0 -rotate-45 scale-0"
                    )}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                </div>
            </button>
            <div className="absolute top-3 right-3 flex items-center">
                {language && (
                    <div className={cn(
                        "px-2 py-1.5 rounded-md mr-8",
                        "text-[10px] sm:text-xs font-medium uppercase tracking-wider",
                        "transition-all duration-300",
                        copied
                            ? "opacity-0 translate-x-4"
                            : "opacity-100 translate-x-0",
                        isDark 
                            ? "text-gray-400" 
                            : "text-gray-500"
                    )}>
                        {language}
                    </div>
                )}
                <div className={cn(
                    "absolute right-8",
                    "text-[10px] sm:text-xs",
                    "transition-all duration-300",
                    "pointer-events-none",
                    isDark
                        ? "text-purple-400"
                        : "text-[#8839ef]",
                    copied
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                )}>
                    COPIED!
                </div>
            </div>
        </>
    );
};

interface CodeBlockProps {
    code: string;
    language: string;
    className?: string;
}

const getTheme = (isDark: boolean) => ({
    plain: {
        backgroundColor: 'transparent',
        color: isDark ? '#cdd6f4' : '#4c4f69'
    },
    styles: [
        {
            types: ['keyword', 'builtin'],
            style: { color: isDark ? '#cba6f7' : '#8839ef' }  // mauve
        },
        {
            types: ['comment'],
            style: { color: isDark ? '#6c7086' : '#8c8fa1', fontStyle: 'italic' as const }  // overlay0/1
        },
        {
            types: ['class-name', 'function'],
            style: { color: isDark ? '#89b4fa' : '#1e66f5' }  // blue
        },
        {
            types: ['string', 'attr-value'],
            style: { color: isDark ? '#a6e3a1' : '#40a02b' }  // green
        },
        {
            types: ['punctuation', 'operator'],
            style: { color: isDark ? '#89dceb' : '#04a5e5' }  // sky
        },
        {
            types: ['number', 'constant'],
            style: { color: isDark ? '#fab387' : '#fe640b' }  // peach
        },
        {
            types: ['variable'],
            style: { color: isDark ? '#f5c2e7' : '#ea76cb' }  // pink
        }
    ]
});

export default function CodeBlock({ code, language, className }: CodeBlockProps) {
    const { theme: currentTheme } = useTheme();
    // Provide a fallback theme based on system preference
    const isDark = currentTheme === 'dark' || (
        !currentTheme && 
        typeof window !== 'undefined' && 
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    return (
        <div className={cn(
            "relative my-4",
            "rounded-lg overflow-hidden",
            "border w-full",
            isDark
                ? "bg-[#1e1e2e] border-[#313244]"
                : "bg-[#f8f9fc] border-[#e6e9ef]",
            className
        )}>
            <Highlight
                theme={getTheme(isDark)}
                code={code}
                language={language}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre 
                        className={cn(
                            className,
                            monoFont.className,
                            "overflow-x-auto whitespace-pre-wrap break-words",
                            "transition-colors duration-200",
                            "p-4",
                            "text-[13px] sm:text-sm",
                            isDark
                                ? "bg-[#1e1e2e]"
                                : "bg-[#f8f9fc]"
                        )}
                        style={style}
                    >
                        {tokens.slice(0, -1).map((line, i) => (
                            <div key={i} {...getLineProps({ line, className: "leading-6 sm:leading-7" })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
            <CopyButton code={code} language={language} />
        </div>
    );
} 
