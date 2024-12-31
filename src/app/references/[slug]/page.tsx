import { notFound } from 'next/navigation'
import { references } from '../_data/posts'

type Params = Promise<{ slug: string }>

// Generate static params for all reference pages
export async function generateStaticParams() {
    return references.map((post) => ({
        slug: post.slug,
    }))
}

// export async function generateMetadata({ params }: { params: Params }) {
//     const { slug } = await params
  
//     return {
//       title: `${references.find(post => post.slug === slug)?.title} | sumit.ml`,
//       openGraph: {
//         title: `${references.find(post => post.slug === slug)?.title} | sumit.ml`,
//         description: `${references.find(post => post.slug === slug)?.description}`,
//         images: [
//           {
//             url: `/references/posts/${slug}/opengraph-image.png`,
//             width: 1200,
//             height: 630,
//             alt: `${references.find(post => post.slug === slug)?.description}`,
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: `${references.find(post => post.slug === slug)?.title} | sumit.ml`,
//         description: `${references.find(post => post.slug === slug)?.description}`,
//         images: [
//           {
//             url: `/references/posts/${slug}/twitter-image.png`,
//             width: 1200,
//             height: 630,
//             alt: `${references.find(post => post.slug === slug)?.description}`,
//           },
//         ],
//       },
//     };
//   }
  

export default async function Reference({ 
    params 
}: { 
    params: Params 
}) {
    const { slug } = await params
    
    // Find the matching blog post
    const post = references.find(post => post.slug === slug)
    
    // If no matching post is found, return 404
    if (!post) {
        notFound()
    }

    // Import and render the actual blog post component
    const PostComponent = (await import(`../posts/${slug}/page`)).default
    return <PostComponent />
}