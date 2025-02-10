"use client";

import BaseContainer from "@/components/layout/container/base-container";
import { StackVertical } from "@/components/layout/layout-stack/layout-stack";
import TextHeading from "@/components/ui/text-heading/text-heading";
import Text from "@/components/ui/text/text";
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter";
import { getWeeksByMonth } from "./_data/weeks";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion/accordion";
import { cn } from "@/lib/utils/utils";
import { monoFont } from "@/styles/fonts/fonts";

export default function WeeklyReflections() {
	const monthGroups = getWeeksByMonth();
	// Only the most recent month should be open by default
	const mostRecentMonth = monthGroups[0]?.month;

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

					<Accordion 
						type="single" 
						defaultValue={mostRecentMonth}
						className="space-y-6"
					>
						{monthGroups.map((group) => (
							<AccordionItem
								key={group.month}
								value={group.month}
								className="border-none"
							>
								<AccordionTrigger className={cn(
									"p-0 hover:no-underline",
									"group flex items-center gap-4",
									"transition-all duration-200",
									"data-[state=open]:text-purple-600 dark:data-[state=open]:text-purple-300"
								)}>
									<span className={cn(
										monoFont.className,
										"relative tracking-wider",
										"text-[13px] sm:text-[15px]",
										"text-foreground dark:text-white",
										"font-semibold",
										"group-hover:text-purple-600 dark:group-hover:text-purple-400",
										"group-data-[state=open]:text-purple-600 dark:group-data-[state=open]:text-purple-400"
									)}>
										{group.month}
										<span className={cn(
											"absolute -bottom-px left-0 w-full h-[1px]",
											"bg-gradient-to-r from-purple-600/40 via-purple-600/20 to-transparent",
											"dark:from-purple-300/30 dark:via-purple-300/15 dark:to-transparent",
											"transform origin-left transition-transform duration-300",
											"group-hover:scale-x-100 scale-x-0"
										)} />
									</span>
								</AccordionTrigger>
								<AccordionContent>
									<div className="pt-4 pl-4">
										<StackVertical gap="none">
											{group.weeks.map((week, weekIndex) => (
												<div 
													key={week.href} 
													className={cn(
														"group",
														"relative",
														"border-l border-gray-200/50 dark:border-gray-700/50",
														"transition-all duration-200"
													)}
												>
													<Link 
														href={week.href}
														className={cn(
															monoFont.className,
															"block py-2 pl-6 -ml-px",
															"text-xs sm:text-sm",
															"text-gray-600/90 dark:text-gray-300/90",
															"border-l border-transparent",
															"hover:border-purple-500/80 dark:hover:border-purple-400/80",
															"hover:text-purple-600 dark:hover:text-purple-300",
															"transition-all duration-200"
														)}
													>
														{week.title}
													</Link>
													{/* Hover indicator */}
													<div className={cn(
														"absolute left-0 top-0 bottom-0 w-full",
														"bg-gradient-to-r from-gray-50/0 via-gray-50/0 to-transparent",
														"dark:from-gray-900/0 dark:via-gray-900/0 dark:to-transparent",
														"group-hover:from-purple-50/40 group-hover:via-purple-50/10",
														"dark:group-hover:from-purple-950/30 dark:group-hover:via-purple-950/10",
														"transition-colors duration-200",
														"-z-10"
													)} />
												</div>
											))}
										</StackVertical>
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</StackVertical>

			<IndividualPageFooter parentPageName={`Reflections`} showToTop={false} />
		</BaseContainer>
	);
}