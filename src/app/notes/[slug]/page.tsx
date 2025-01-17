import { notFound } from 'next/navigation'
import { notes } from '../_data/posts'

type Params = Promise<{ slug: string }>

// Generate static params for all reference pages
export async function generateStaticParams() {
    return notes.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params
  
    return {
      title: `${notes.find(post => post.slug === slug)?.title} | sumit.ml`,
      openGraph: {
        title: `${notes.find(post => post.slug === slug)?.title} | sumit.ml`,
        description: `${notes.find(post => post.slug === slug)?.description}`,
        images: [
          {
            url: `/references/posts/${slug}/opengraph-image.png`,
            width: 1200,
            height: 630,
            alt: `${notes.find(post => post.slug === slug)?.description}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${notes.find(post => post.slug === slug)?.title} | sumit.ml`,
        description: `${notes.find(post => post.slug === slug)?.description}`,
        images: [
          {
            url: `/references/posts/${slug}/twitter-image.png`,
            width: 1200,
            height: 630,
            alt: `${notes.find(post => post.slug === slug)?.description}`,
          },
        ],
      },
    };
  }
  

export default async function Reference({ 
    params 
}: { 
    params: Params 
}) {
    const { slug } = await params
    
    // Find the matching blog post
    const post = notes.find(post => post.slug === slug)
    
    // If no matching post is found, return 404
    if (!post) {
        notFound()
    }

    // Import and render the actual blog post component
    const PostComponent = (await import(`../${slug}/page`)).default
    return <PostComponent />
}