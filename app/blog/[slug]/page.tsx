import { getAllPosts, getPost } from '@/lib/blog'
import { BlogPostHeader } from '@/components/blog/BlogPostHeader'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - ValidContext Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      url: `https://validcontext.com/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://validcontext.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  // Dynamically import the MDX content
  let MDXContent
  try {
    MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default
  } catch (error) {
    console.error('Error loading MDX:', error)
    notFound()
  }

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ValidContext',
      logo: {
        '@type': 'ImageObject',
        url: 'https://validcontext.com/favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://validcontext.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative min-h-screen">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,160,90,0.05),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative">
          {/* Back button */}
          <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="group -ml-2">
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                  Back to all articles
                </Button>
              </Link>
            </div>
          </div>

          {/* Article header */}
          <div className="pb-12">
            <BlogPostHeader post={post} />
          </div>

          {/* Cover image (optional) */}
          {post.coverImage && (
            <div className="px-4 sm:px-6 lg:px-8 mb-16">
              <div className="max-w-5xl mx-auto">
                <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-border shadow-2xl">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Article content */}
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="max-w-3xl mx-auto">
              {/* Reading container with optimal line length */}
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
                prose-headings:font-display
                prose-headings:tracking-tight
                prose-headings:text-foreground
                prose-headings:font-normal
                prose-h1:text-4xl prose-h1:sm:text-5xl
                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground
                prose-a:text-accent prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-muted prose-pre:border prose-pre:border-border
                prose-blockquote:border-l-accent prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic
                prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-lg
                prose-hr:border-border/40 prose-hr:my-8
                prose-ul:text-muted-foreground prose-ul:text-lg
                prose-ol:text-muted-foreground prose-ol:text-lg
                prose-li:leading-relaxed
                [&>*:first-child]:mt-0
              ">
                <MDXContent />
              </div>

              {/* Article footer */}
              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Written by {post.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <Link href="/#waitlist">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Join the Waitlist
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related or back to blog */}
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="max-w-3xl mx-auto">
              <div className="bg-muted/50 rounded-2xl border border-border p-8 text-center">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  Want to read more?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore our other articles on product validation and customer discovery.
                </p>
                <Link href="/blog">
                  <Button variant="outline" size="lg">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
