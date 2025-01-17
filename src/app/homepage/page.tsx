'use client'

import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import { HomepageFooter } from "@/components/layout/footer/HomepageFooter"
import { HeroSection } from "@/components/blocks/homepage/HeroSection"
import { CurrentWork } from "@/components/blocks/homepage/CurrentWork"
import { Navbar } from "@/components/ui/navbar/Navbar"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { HomepageSocials } from "@/components/blocks/homepage/HomepageSocials"

export default function Homepage() {
  return (
    <>
      <BaseContainer size="md" paddingX="md" paddingY="lg">
        <div className="flex justify-between items-center mb-8">
            <Navbar />
            <ThemeToggle />
        </div>
        <StackVertical gap="lg">
            <HeroSection />
            <CurrentWork />
            <HomepageSocials />
        </StackVertical>
      </BaseContainer>
      <HomepageFooter />
    </>
  )
}
