import { getAllPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - ValidContext',
  description: 'Guides on product validation, customer discovery, and building products people actually want using Jobs-to-be-Done methodology.',
  keywords: ['product validation', 'customer discovery', 'jobs to be done', 'indie hacking', 'saas validation'],
  openGraph: {
    title: 'ValidContext Blog - Product Validation Guides',
    description: 'Learn how to validate ideas before building, conduct customer interviews, and use the Four Forces framework.',
    type: 'website',
    url: 'https://validcontext.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValidContext Blog',
    description: 'Product validation guides for indie builders',
  },
  alternates: {
    canonical: 'https://validcontext.com/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = posts.find(p => p.featured)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <div className="relative min-h-screen">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,160,90,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,160,90,0.02),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative">
        {/* Header Section */}
        <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
                <span className="text-sm font-medium text-accent">Latest Insights</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 tracking-tight">
                The ValidContext
                <br />
                <span className="text-accent">Journal</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Deep dives on product validation, customer discovery, and building
                products people actually want. No fluff, just frameworks that work.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Post */}
        {featuredPost && (
          <section className="px-4 sm:px-6 lg:px-8 mb-24">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Featured
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              <div className="animate-fade-in-up">
                <BlogCard post={featuredPost} featured />
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        {regularPosts.length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8 pb-32">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-2">
                  All Articles
                </h2>
                <p className="text-muted-foreground">
                  {regularPosts.length} {regularPosts.length === 1 ? 'article' : 'articles'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <div
                    key={post.slug}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Empty State */}
        {posts.length === 0 && (
          <section className="px-4 sm:px-6 lg:px-8 pb-32">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                <svg
                  className="w-8 h-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-foreground mb-3">
                No articles yet
              </h2>
              <p className="text-muted-foreground">
                Check back soon for insights on product validation and customer discovery.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
