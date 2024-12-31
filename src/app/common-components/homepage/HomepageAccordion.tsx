import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";
import TextHeading from "../text-heading/text-heading";
import { monoFont, sansFont } from "@/styles/fonts/fonts";
import { cn } from "@/styles/lib/utils";
import Text from "../text/text";

export default function HomepageAccordion() {
  return (
    <div className="pt-10">
      <TextHeading as="h2" weight="medium" className={cn(sansFont.className)}>FAQ</TextHeading>  
      <Accordion type="single" collapsible className={cn(monoFont.className, "w-full", "font-light")}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Why do I like Math so much?</AccordionTrigger>
          <AccordionContent>
            <Text variant="muted">↳ I like Math because it is a way to express the world in a way that is easy to understand.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why do I also like ML so much?</AccordionTrigger>
          <AccordionContent>
            <Text variant="muted">↳ I like ML because I think neural networks are super cool.</Text>
          </AccordionContent>
        </AccordionItem>
				<AccordionItem value="item-3">
          <AccordionTrigger>I want to start learning ML, but don't know where to begin.</AccordionTrigger>
          <AccordionContent>
            <Text variant="muted">↳ Please go to <Link href="/blog/getting-started-with-machine-learning" className="text-purple-500 hover:underline">this blog</Link> that I wrote attempting to answer this question.</Text>
          </AccordionContent>
        </AccordionItem>
				<AccordionItem value="item-4">
          <AccordionTrigger>Are you Indian?</AccordionTrigger>
          <AccordionContent>
            <Text variant="muted">↳ No. But I understand why you'd think so. It's all good.</Text>
          </AccordionContent>
        </AccordionItem>
				<AccordionItem value="item-5">
          <AccordionTrigger>How do I get a job in Japan as a foreigner who doesn't know Japanese?</AccordionTrigger>
          <AccordionContent>
            <Text variant="muted">↳ This is a question that requires a comprehensive answer. I am planning to cover it in a separate blog.
							<br />
							<br />
							The TL;DR to this is that you need to keep applying to a lot of companies in Japan and should have an utmost trust in your abilities. Japan needs lots of skilled HR, so showcase it and you might get lucky.</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}