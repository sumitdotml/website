'use client'

import { motion } from 'framer-motion'
import { monoFont } from '@/styles/fonts/fonts'
import { cn } from '@/lib/utils/utils'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Link from 'next/link'
import Image from 'next/image'
import Ruler from '@/components/ui/ruler/ruler'
import { List, ListItem } from '@/components/ui/list/list'

export function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pb-8"
        >
            <div className="relative">
                <StackVertical gap="xs">
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={cn("text-2xl sm:text-3xl md:text-4xl", monoFont.className)}
                    >
                        👾
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <TextHeading as="h1" className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            sumit.ml
                        </TextHeading>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Text >
                            Hi! I am Sumit.
                        </Text>

                        <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Text>
                                I'm a swe based in Tokyo. I love coffee, machine learning, math, and among others. Glad to have you here! Feel free to look around :)
                            </Text>
                            <Ruler color='colorless' marginTop='sm' marginBottom='none'/>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                                <Text>
                                    This is my graph of thoughts, notes, and ideas.
                                </Text>

                                <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                                <Text>
                                    I ramble about things on my{' '}
                                    <Link href="/blog" className="text-purple-500 font-bold hover:underline">
                                        blog
                                    </Link>
                                    ; you can check it out if you're interested.
                                </Text>

                                <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                                <Text>
                                    Here are some reads I recommend from this site if you're interested:
                                </Text>

                                <Ruler color='colorless' marginTop='md' marginBottom='none'/>

                                <List spacing='tight'>
                                    <ListItem>
                                        <Link href="/about" className="underline hover:text-purple-500">My novice journey, a monologue</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="/blog/my-2025-resolution" className="underline hover:text-purple-500">My 2025 Resolution: Beyond the Roadmaps, Beyond the Timelines</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="/blog/getting-started-with-machine-learning" className="underline hover:text-purple-500">
                                            Getting Started with Machine Learning
                                        </Link>
                                    </ListItem>
                                </List>

                                <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                                <Text>
                                    I also document my learnings through learning reflections every week. You can take a look at those{' '}
                                    <Link href="/learning" className="text-purple-500 font-bold hover:underline">
                                        here
                                    </Link>
                                    .
                                </Text>
                        </motion.div>
                    </motion.div>
                </StackVertical>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 -mb-8"
            >
                <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[21/9] rounded-lg overflow-hidden">
                    <Image
                        className="object-cover"
                        fill
                        src="/gion-town.png" 
                        alt="A photo of Gion Town, Kyoto I took on March 2024."
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
} 