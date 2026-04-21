import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-10 lg:px-8', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper