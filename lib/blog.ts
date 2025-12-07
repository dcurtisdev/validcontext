import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  publishedAt: string
  updatedAt: string
  excerpt: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  featured: boolean
  readingTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  // Return empty array if directory doesn't exist yet
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const { text } = readingTime(content)

      return {
        slug,
        title: data.title || '',
        publishedAt: data.publishedAt || '',
        updatedAt: data.updatedAt || data.publishedAt || '',
        excerpt: data.excerpt || '',
        author: data.author || 'Anonymous',
        category: data.category || 'Uncategorized',
        tags: data.tags || [],
        coverImage: data.coverImage || '',
        featured: data.featured || false,
        readingTime: text,
        content,
      } as BlogPost
    })

  return posts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPost(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find(post => post.featured)
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter(post => post.tags.includes(tag))
}
