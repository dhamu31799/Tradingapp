'use client'

// React Imports
import { forwardRef } from 'react'

// Next Imports
import NextLink from 'next/link'

const Link = (props, ref) => {
  // Props
  const { href, onClick, ...rest } = props

  return (
    <NextLink
      ref={ref}
      {...rest}
      href={{pathname:href || '/login'}}
      onClick={onClick ? e => onClick(e) : !href ? e => e.preventDefault() : undefined}
    />
  )
}

export default forwardRef(Link)
