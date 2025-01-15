"use client";

import Content from "./content.mdx";
import { mdxComponents } from "app/mdx-components";
import BaseContainer from "@/common-components/base-container/base-container";
import { StackVertical } from "@/common-components/layout-stack/layout-stack";
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb";
import { ThemeToggle } from "@/styles/components/ui/theme-toggle";
import { IndividualPageFooter } from "@/common-components/footer/IndividualPageFooter";
import { TableOfContents } from "@/common-components/table-of-contents/table-of-contents";

export default function PyTorchReferences() {
	return (
		<BaseContainer size="md" paddingX="md" paddingY="lg">
			<StackVertical gap="md">
				<div className="flex items-center justify-between">
					<DynamicBreadcrumb
						items={[
							{ href: "/", label: "Home", emoji: "👾" },
							{ href: "/references", label: "References" },
							{ label: "Week 1" },
						]}
					/>
					<ThemeToggle />
				</div>

				<TableOfContents contentId="ToC" />

				<div className="prose dark:prose-invert max-w-none">
					<Content components={mdxComponents} />
				</div>
			</StackVertical>

			<IndividualPageFooter
				parentPageName="References"
				showToTop={true}
			/>
		</BaseContainer>
	);
}
