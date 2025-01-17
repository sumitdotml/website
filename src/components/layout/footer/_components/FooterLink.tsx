'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/utils'

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
    color?: string;
    external?: boolean;
    icon?: React.ReactNode;
}

export function FooterLink({ href, children, color = 'purple', external, icon }: FooterLinkProps) {
    return (
        <Link 
            href={href}
            className={cn(
                "flex items-center",
                "gap-1 sm:gap-2",
                `text-${color}-500 hover:text-${color}-400`,
                "text-[11px] sm:text-sm font-medium",
                "transition-all duration-200 ease-in-out",
                "hover:translate-y-[-1px]",
                "relative after:content-[''] after:absolute after:w-0 after:h-[1px]",
                `after:bg-${color}-400 after:left-0 after:bottom-[-2px]`,
                "after:transition-all after:duration-200",
                "hover:after:w-full"
            )}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
            {icon && (
                <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                >
                    {icon}
                </motion.div>
            )}
            {children}
        </Link>
    )
} 