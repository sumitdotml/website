'use client'

import { useEffect, useRef } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface MathProps {
  math: string
  block?: boolean
  className?: string
}

export default function Math({ math, block = false, className = '' }: MathProps) {
  const mathRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (mathRef.current) {
      katex.render(math, mathRef.current, {
        displayMode: block,
        throwOnError: false,
        strict: false
      })
    }
  }, [math, block])

  return <span ref={mathRef} className={className} />
} 