'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
    return (
        <Link 
            href={href}
            onClick={onClick}
            className={cn(
                "block w-full",
                "text-sm text-muted-foreground hover:text-purple-500",
                "transition-colors duration-200",
                monoFont.className
            )}
        >
            {children}
        </Link>
    )
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const links = [
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' },
        { href: '/learning', label: 'Learning' },
        { href: '/notes', label: 'Notes' }
    ]

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMenuOpen && !target.closest('.mobile-menu-container')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <nav className={cn(monoFont.className, "relative z-50")}>
            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-6">
                {links.map((link) => (
                    <motion.div
                        key={link.href}
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.2 }}
                        className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-purple-500 after:left-0 after:bottom-[-2px] after:transition-all after:duration-200 hover:after:w-full"
                    >
                        <NavLink href={link.href}>
                            {link.label}
                        </NavLink>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden mobile-menu-container -ml-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(!isMenuOpen);
                    }}
                    className={cn(
                        "relative z-[60]",
                        "flex items-center justify-center",
                        "w-9 h-9",
                        "text-muted-foreground",
                        "transition-all duration-300",
                        isMenuOpen && "text-purple-500 bg-purple-500/10 rounded-lg",
                        "hover:text-purple-500"
                    )}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    <motion.div
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
                                onClick={() => setIsMenuOpen(false)}
                            />

                            {/* Menu Content */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ 
                                    duration: 0.2,
                                    ease: "easeOut"
                                }}
                                className={cn(
                                    "absolute top-12 left-[-8px] z-[60]",
                                    "min-w-[200px] w-auto",
                                    "bg-background/80 dark:bg-gray-950/80",
                                    "backdrop-blur-md",
                                    "border border-border/50 rounded-lg",
                                    "shadow-lg shadow-purple-500/5",
                                    "overflow-hidden"
                                )}
                            >
                                <div className="py-2">
                                    {links.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ 
                                                delay: index * 0.05,
                                                duration: 0.2
                                            }}
                                            className="w-full"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={cn(
                                                    monoFont.className,
                                                    "block px-4 py-2.5",
                                                    "text-sm text-muted-foreground",
                                                    "hover:bg-purple-500/10 hover:text-purple-500",
                                                    "transition-colors duration-200"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}