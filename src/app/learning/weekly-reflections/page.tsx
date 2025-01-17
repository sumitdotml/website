"use client";

import BaseContainer from "@/components/layout/container/base-container";
import { StackVertical } from "@/components/layout/layout-stack/layout-stack";
import TextHeading from "@/components/ui/text-heading/text-heading";
import Text from "@/components/ui/text/text";
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter";
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