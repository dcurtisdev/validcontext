import { BlogPost } from '@/lib/blog'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User } from 'lucide-react'

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="mb-6">
        <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 mb-4">
          {post.category}
        </Badge>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b border-border py-4">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span className="font-medium">{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{post.readingTime}</span>
        </div>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      )}
    </header>
  )
}
