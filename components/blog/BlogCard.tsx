import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { BlogPost } from '@/lib/blog'
import { Calendar, Clock } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className={`group overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-accent/50 ${
        featured ? 'md:grid md:grid-cols-2 md:gap-6' : ''
      }`}>
        {post.coverImage && (
          <div className="relative overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={featured ? 800 : 600}
              height={featured ? 450 : 340}
              className="object-cover w-full h-48 md:h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className={`p-6 ${featured ? 'flex flex-col justify-center' : ''}`}>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
              {post.category}
            </Badge>
          </div>

          <h3 className={`font-display mb-3 text-foreground group-hover:text-accent transition-colors ${
            featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
          }`}>
            {post.title}
          </h3>

          <p className={`text-muted-foreground mb-4 line-clamp-3 ${
            featured ? 'text-lg' : 'text-base'
          }`}>
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
