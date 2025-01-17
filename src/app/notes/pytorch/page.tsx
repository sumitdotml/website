"use client";

import Content from "./content.mdx";
import { mdxComponents } from "@/lib/mdx/mdx-components";
import BaseContainer from "@/components/layout/container/base-container";
import { StackVertical } from "@/components/layout/layout-stack/layout-stack";
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { IndividualPageFooter } from "@/components/layout/footer/IndividualPageFooter";

export default function PyTorchReferences() {
	return (
		<BaseContainer size="md" paddingX="md" paddingY="lg">
			<StackVertical gap="md">
				<div className="flex items-center justify-between">
					<DynamicBreadcrumb
						items={[
							{ href: "/", label: "Home", emoji: "👾" },
							{ href: "/notes", label: "Notes" },
							{ label: "PyTorch" },
						]}
					/>
					<ThemeToggle />
				</div>
				<div className="prose dark:prose-invert max-w-none">
					<Content components={mdxComponents} />
				</div>
			</StackVertical>

			<IndividualPageFooter
				parentPageName="Notes"
				showToTop={true}
			/>
		</BaseContainer>
	);
}
