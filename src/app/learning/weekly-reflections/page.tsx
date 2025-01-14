"use client";

import BaseContainer from "@/common-components/base-container/base-container";
import { StackVertical } from "@/common-components/layout-stack/layout-stack";
import TextHeading from "@/common-components/text-heading/text-heading";
import Text from "@/common-components/text/text";
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb";
import { ThemeToggle } from "@/styles/components/ui/theme-toggle";
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter";
import Link from "next/link";

const weeks = [
	{ id: 'week-2', title: 'Week 2, 2025 (Jan 6th - Jan 13th)' },
	{ id: 'week-1', title: 'Week 1, 2025 (Jan 1st - Jan 5th)' }
]

export default function WeeklyReflections() {
	return (
		<BaseContainer size="md" paddingX="md" paddingY="lg">
			<StackVertical gap="md">
				{/* Breadcrumb */}
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

				{/* Header Content */}
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
							<Text key={week.id} className="underline font-bold hover:text-purple-500">
								<Link href={`/learning/weekly-reflections/${week.id}`}>
									{week.title}
								</Link>
							</Text>
						))}
					</StackVertical>
				</div>
			</StackVertical>

			<IndividualPageFooter parentPageName={`Reflections`} showToTop={false} />
		</BaseContainer>
	);
}