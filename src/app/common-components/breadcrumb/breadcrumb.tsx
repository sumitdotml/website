'use client'

import { Breadcrumb as BaseBreadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import Link from "next/link"
import { monoFont } from "@/styles/fonts/fonts"
import { cn } from "@/styles/lib/utils"
import React from "react"

interface BreadcrumbItem {
    label: string;
    href?: string;
    emoji?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function DynamicBreadcrumb({ items, className }: BreadcrumbProps) {
    const lastItem = items[items.length - 1];
    const firstItem = items[0];
    // For mobile, we only want to show up to the section level (first two items)
    const mobileItems = items.slice(0, 2);

    return (
        <BaseBreadcrumb className={cn(monoFont.className, className)}>
            <BreadcrumbList className="flex-wrap items-center">
                {/* Desktop View - Full Breadcrumb */}
                <div className="hidden sm:contents">
                    {items.map((item, index) => (
                        <React.Fragment key={item.href || item.label}>
                            <BreadcrumbItem>
                                {index === items.length - 1 ? (
                                    <BreadcrumbPage className="line-clamp-1">
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href={item.href || '#'} className="flex items-center whitespace-nowrap text-sm">
                                            {item.emoji && item.emoji}
                                            {item.emoji ? ' ' : ''}{item.label}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && (
                                <BreadcrumbSeparator>
                                    <Slash className="w-4 h-4" />
                                </BreadcrumbSeparator>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile View - Only up to section level */}
                <div className="sm:hidden w-full">
                    <div className="flex items-center gap-1.5">
                        {mobileItems.map((item, index) => (
                            <React.Fragment key={item.href || item.label}>
                                {item.href ? (
                                    <Link 
                                        href={item.href} 
                                        className="flex items-center gap-1 text-[11px] text-muted-foreground/80 hover:text-foreground transition-colors"
                                    >
                                        {item.emoji && <span className="text-sm">{item.emoji}</span>}
                                        <span>{item.label}</span>
                                    </Link>
                                ) : (
                                    <span className="flex items-center gap-1 text-[11px] text-foreground">
                                        {item.emoji && <span className="text-sm">{item.emoji}</span>}
                                        <span>{item.label}</span>
                                    </span>
                                )}
                                {index < mobileItems.length - 1 && (
                                    <Slash className="w-3 h-3 text-muted-foreground/50" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </BreadcrumbList>
        </BaseBreadcrumb>
    )
} 