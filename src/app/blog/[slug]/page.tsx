import { notFound } from 'next/navigation'
import { blogPosts } from '../_data/posts'

type Params = Promise<{ slug: string }>

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params
  
    return {
      title: `${blogPosts.find(post => post.slug === slug)?.title} | sumit.ml`,
      openGraph: {
        title: `${blogPosts.find(post => post.slug === slug)?.title} | sumit.ml`,
        description: `${blogPosts.find(post => post.slug === slug)?.description}`,
        images: [
          {
            url: `/blog/posts/${slug}/opengraph-image.png`,
            width: 1200,
            height: 630,
            alt: `${blogPosts.find(post => post.slug === slug)?.description}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${blogPosts.find(post => post.slug === slug)?.title} | sumit.ml`,
        description: `${blogPosts.find(post => post.slug === slug)?.description}`,
        images: [
          {
            url: `/blog/posts/${slug}/twitter-image.png`,
            width: 1200,
            height: 630,
            alt: `${blogPosts.find(post => post.slug === slug)?.description}`,
          },
        ],
      },
    };
  }
  

export default async function BlogPost({ 
    params 
}: { 
    params: Params 
}) {
    const { slug } = await params
    
    // Find the matching blog post
    const post = blogPosts.find(post => post.slug === slug)
    
    // If no matching post is found, return 404
    if (!post) {
        notFound()
    }

    // Import and render the actual blog post component
    const PostComponent = (await import(`../posts/${slug}/page`)).default
    return <PostComponent />
}

