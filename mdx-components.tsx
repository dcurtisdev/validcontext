import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Typography - Headings
    h1: ({ children }) => (
      <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-6 mt-8 first:mt-0 font-normal">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6 mt-16 font-normal">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl text-foreground mb-4 mt-10 font-normal">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-xl text-foreground mb-2 mt-4 font-normal">
        {children}
      </h4>
    ),

    // Typography - Text
    p: ({ children }) => (
      <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
        {children}
      </p>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground text-lg ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground text-lg ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),

    // Code
    code: ({ children, className, ...props }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground" {...props}>
            {children}
          </code>
        )
      }

      // Block code will be wrapped by pre
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
    pre: ({ children }) => (
      <pre className="mb-4 mt-4 overflow-x-auto rounded-lg bg-muted p-4 border border-border">
        {children}
      </pre>
    ),

    // Images
    img: ({ src, alt }) => {
      if (!src) return null
      return (
        <span className="block my-6">
          <img
            src={src}
            alt={alt || ''}
            className="rounded-lg border border-border w-full"
            loading="lazy"
          />
          {alt && (
            <span className="block text-center text-sm text-muted-foreground mt-2 italic">
              {alt}
            </span>
          )}
        </span>
      )
    },

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6 text-lg">
        {children}
      </blockquote>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent hover:underline font-medium transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),

    // Horizontal Rule
    hr: () => (
      <hr className="my-8 border-border/40" />
    ),

    // Tables
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 text-left font-semibold bg-muted">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">
        {children}
      </td>
    ),

    ...components,
  }
}
