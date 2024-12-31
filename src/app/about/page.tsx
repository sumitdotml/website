'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import { SectionFooter } from "@/common-components/footer/SectionFooter"
import Text from "@/common-components/text/text"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"

export default function About() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                {/* Breadcrumb */}
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '👾' },
                            { label: 'About' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                {/* Header Content */}
                <div>
                <TextHeading as="h1" weight="bold">
                    About
                </TextHeading>
					<Text variant="muted" size="xs" className="mb-8">Last updated: December 30, 2024</Text>
                <StackVertical gap="md">
                    <Text>
                            Hi! I am Sumit. I am a SWE currently based in Tokyo, and I have a big passion for AI.
                    </Text>
                    <Text>
                    I studied in Japan as a business undergraduate for 4 years and received a degree in it, but I was truly never interested in anything related to business. Well, it's a long story about why I ended up at the university I ended up in and pursued the kind of degree I pursued despite having next to no interest in any of that, but life does really work in fascinating ways. I must say that it hasn't turned out too bad for myself.
                    </Text>
                    <Text>
                        To be very brief, I was always into math and was always fascinated by the engineering behind a lot of things I would see in real life. Bridges have always been one of the most splendid pieces of architecture to me; these towering figures effortlessly handle countless vehicles weighing tons, and humans somehow learned how to do that? It's incredible. I tell this to my friends every time we go on some trips here in Japan (god bless this country is full of these) and they try to stay amused for my sake, but I can see it that their thoughts lie elsewhere. Maybe I'm just a nerd. But I think bridges are cool. So are rockets. Humans built all that.
                        
                    </Text>
                    <Text>
                        So yeah, I got introduced to the concept of Machine Learning by virtue of a professor at my university when I was a 3rd year student, completely frustrated with myself because I hated my major and had no option to pursue anything related to STEM. This man changed my life.
                    </Text>
                    <Text>
                        Of course, I was not as driven when it came to getting indulged in AI-related learning as I am now, but I gradually began building an interest in the so-called AI-related field. Things ended up happening when I was a 4th-year student, and I ended up getting a new-grad role in SWE here in Japan. I had 0 experience in software, yet somehow I managed to break into tech. I know I am not revealing some important bits here about what went down, but I believe there was a good mixture of luck as well as just the tenacity of making something happen no matter what to break into tech (not necessarily AI since I knew it was a leap too big to take, although I did not take it out of the equation).
                    </Text>
                    <Text>
                        I like to think of my progression in terms of a horizontal axis of real numbers between -10 to 10, where I believe -10 was me starting a degree that I clearly was not interested in after failing to be accepted into the program I wanted, -5 was when I found this professor who opened a new door towards the field of AI for me, -3 was when I first got a technical internship purely out of me selling my determination to learn, and finally 0 — the complete resetting of my negative career scale — when I first received a full-time tech role (my current one). In other words, my detours have finally converged, and my journey has finally started.
                    </Text>
                    <Text>
                        I will not say that I was glad I took this detour, but I am glad that I got to experience it. I am glad that I got lucky. Or maybe I wasn't. Maybe this was always going to be how it was. In any case, it's an exciting time to be alive.
                    </Text>
                </StackVertical>
            </div>
            </StackVertical>
            <SectionFooter color="purple" />
        </BaseContainer>
    )
}

