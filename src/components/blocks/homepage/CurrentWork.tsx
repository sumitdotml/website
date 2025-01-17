import { motion } from 'framer-motion'
import { Code, Brain, Divide, Rotate3D } from 'lucide-react'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Text from '@/components/ui/text/text'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Link from 'next/link'

interface WorkItemProps {
    icon: React.ReactNode;
    text: string;
    delay: number;
    hyperlink?: string;
    hyperlinkText?: string;
    endText?: string;
}

function WorkItem({ icon, text, delay, hyperlink, hyperlinkText, endText }: WorkItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-center gap-3"
        >
            <div className="text-purple-500">
                {icon}
            </div>
            <Text variant="muted" size="sm">
                {text}
                {hyperlink && hyperlinkText && (
                    <Link href={hyperlink} className="text-purple-500 hover:underline">
                        {hyperlinkText}
                    </Link>
                )}
                {endText && (
                    <span>{endText}</span>
                )}
            </Text>
        </motion.div>
    )
}

export function CurrentWork() {
    const items = [
        {
            icon: <Brain className="w-4 h-4" />,
            text: "Studying traditional ML"
        },
        {
            icon: <Divide className="w-4 h-4" />,
            text: "Learning math for ML"
        },
        {
            icon: <Code className="w-4 h-4" />,
            text: "Mastering the language of Python"
        },

        {
            icon: <Rotate3D className="w-4 h-4" />,
            text: "Learning to get comfy with PyTorch till 5D",
        }
        // {
        //     icon: <BookOpen className="w-4 h-4" />,
        //     text: "Reading ",
        //     hyperlink: "/notes/books",
        //     hyperlinkText: "ML Books",
        //     endText: ""
        // }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            <StackVertical gap="none">
                <TextHeading as="h2">Current Ongoings</TextHeading>
                <StackVertical gap="md">
                    {items.map((item, index) => (
                        <WorkItem 
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            delay={1.2 + index * 0.1}
                            // hyperlink={item.hyperlink}
                            // hyperlinkText={item.hyperlinkText}
                            // endText={item.endText}
                        />
                    ))}
                </StackVertical>
            </StackVertical>
        </motion.div>
    )
} 