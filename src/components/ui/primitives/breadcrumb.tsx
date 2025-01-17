'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal, Slash } from "lucide-react"
import Link from "next/link"
import { monoFont } from "@/styles/fonts/fonts"
import { cn } from "@/lib/utils/utils"

// Base Breadcrumb Components
const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

// Dynamic Breadcrumb Implementation
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
    const parentItem = items[items.length - 2];
    const homeItem = items[0];
    
    // For mobile, we want to show Home, immediate parent (if exists), and current page
    // But avoid duplicate home items
    const mobileItems = parentItem 
        ? (parentItem.href === '/' ? [homeItem, lastItem] : [homeItem, parentItem, lastItem])
        : [homeItem, lastItem];

    return (
        <Breadcrumb className={cn(monoFont.className, className)}>
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

                {/* Mobile View - Home, parent (if exists), and current page */}
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
        </Breadcrumb>
    )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} 