import { AlertCircle, Info, Lightbulb } from 'lucide-react'
import { ReactNode } from 'react'

interface BlogCalloutProps {
  children: ReactNode
  variant?: 'info' | 'warning' | 'tip'
}

export function BlogCallout({ children, variant = 'info' }: BlogCalloutProps) {
  const variants = {
    info: {
      icon: Info,
      className: 'border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300'
    },
    warning: {
      icon: AlertCircle,
      className: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300'
    },
    tip: {
      icon: Lightbulb,
      className: 'border-accent/50 bg-accent/10 text-accent'
    }
  }

  const { icon: Icon, className } = variants[variant]

  return (
    <div className={`flex gap-3 p-4 my-6 rounded-lg border-l-4 ${className}`}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}
