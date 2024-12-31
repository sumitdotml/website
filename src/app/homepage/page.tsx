'use client'

import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import { HomepageFooter } from "@/common-components/footer/HomepageFooter"
import { HeroSection } from "@/common-components/homepage/HeroSection"
import { CurrentWork } from "@/common-components/homepage/CurrentWork"
import { Navbar } from "@/common-components/navbar/Navbar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { HomepageSocials } from "@/common-components/homepage/HomepageSocials"

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
