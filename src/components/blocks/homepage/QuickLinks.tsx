import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils/utils'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Ruler from '@/components/ui/ruler/ruler'

interface QuickLinkProps {
    href: string;
    title: string;
    description: string;
}

function QuickLink({ href, title, description }: QuickLinkProps) {
    return (
        <Link href={href} className="group block">
            <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "flex items-center justify-between",
                    "p-4 rounded-lg",
                    "bg-transparent hover:bg-purple-500/5",
                    "transition-colors duration-200"
                )}
            >
                <div>
                    <h3 className="font-medium text-lg group-hover:text-purple-500 transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 transition-colors" />
            </motion.div>
        </Link>
    )
}

export function QuickLinks() {
    const links = [
        {
            href: '/blog',
            title: 'Blog',
            description: 'Thoughts on ML, programming, and technology'
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
        >
            <StackVertical gap="none">
                <Ruler color="purple" weight="thin" />
                {links.map((link, index) => (
                    <QuickLink key={link.href} {...link} />
                ))}
                <Ruler color="purple" weight="thin" />
            </StackVertical>
        </motion.div>
    )
} 