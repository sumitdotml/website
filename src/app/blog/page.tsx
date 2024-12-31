import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import { BlogCard } from "./_components/BlogCard"
import { BlogHeader } from "./_components/BlogHeader"
import { blogPosts } from "./_data/posts"
import { SectionFooter } from "@/common-components/footer/SectionFooter"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog | sumit.ml',
    description: 'thoughts on machine learning, math, technology, and my journey',
}

export default function BlogListing() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <BlogHeader />
                <StackVertical gap="none">
                    {blogPosts.map((post, index) => (
                        <BlogCard 
                            key={post.id} 
                            post={post} 
                            isLast={index === blogPosts.length - 1}
                        />
                    ))}
                </StackVertical>
            </StackVertical>
            <SectionFooter color="purple" showToTop={false} />
        </BaseContainer>
    )
}