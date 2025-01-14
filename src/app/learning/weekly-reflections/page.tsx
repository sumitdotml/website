"use client";

import BaseContainer from "@/common-components/base-container/base-container";
import { StackVertical } from "@/common-components/layout-stack/layout-stack";
import TextHeading from "@/common-components/text-heading/text-heading";
import Text from "@/common-components/text/text";
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb";
import { ThemeToggle } from "@/styles/components/ui/theme-toggle";
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter";
import { weeks } from "./_data/weeks";
import Link from "next/link";

export default function WeeklyReflections() {
	return (
		<BaseContainer size="md" paddingX="md" paddingY="lg">
			<StackVertical gap="md">
				<div className="flex items-center justify-between">
					<DynamicBreadcrumb
						items={[
							{ href: "/", label: "Home", emoji: "👾" },
							{ href: "/learning", label: "Learning" },
							{ label: "Weekly Reflections" },
						]}
					/>
					<ThemeToggle />
				</div>

				<div>
					<TextHeading as="h1" weight="bold">
						Weekly Reflections
					</TextHeading>
					<Text variant="muted" className="mb-8">
						My attempt at documenting, reflecting on, and being grateful for
						what I learned each week in my pursuit of knowledge.
					</Text>

					<StackVertical gap="md">
						{weeks.map(week => (
							<div key={week.href}>
								<Text className="underline font-bold hover:text-purple-500">
									<Link href={week.href}>
										{week.title}
									</Link>
								</Text>
							</div>
						))}
					</StackVertical>
				</div>
			</StackVertical>

			<IndividualPageFooter parentPageName={`Reflections`} showToTop={false} />
		</BaseContainer>
	);
}