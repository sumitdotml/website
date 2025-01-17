import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'
import { cn } from '@/lib/utils/utils'
import { monoFont } from '@/styles/fonts/fonts'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    delay: number;
}

function SocialLink({ href, icon, label, delay }: SocialLinkProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.3 }}
        >
            <Link 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "flex items-center gap-2 group",
                    "text-sm text-muted-foreground",
                    "hover:text-purple-500 transition-colors"
                )}
            >
                <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                >
                    {icon}
                </motion.div>
                <span className={monoFont.className}>{label}</span>
            </Link>
        </motion.div>
    )
}

export function SocialLinks() {
    const links = [
        {
            href: "https://github.com/sumitdotml",
            icon: <Github className="w-4 h-4" />,
            label: "github"
        },
        {
            href: "https://x.com/sumitdotml",
            icon: <Twitter className="w-4 h-4" />,
            label: "twitter"
        },
        {
            href: "mailto:sumit@sumit.ml",
            icon: <Mail className="w-4 h-4" />,
            label: "email"
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
        >
            <StackVertical gap="md">
                <div className={cn("text-sm text-muted-foreground", monoFont.className)}>
                    Find me on
                </div>
                <div className="flex gap-4">
                    {links.map((link, index) => (
                        <SocialLink 
                            key={link.href}
                            {...link}
                            delay={1.6 + index * 0.1}
                        />
                    ))}
                </div>
            </StackVertical>
        </motion.div>
    )
} 