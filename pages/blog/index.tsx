import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div>
      <h1>Partie blog</h1>
      <Link href="/blog/10">
    link
      </Link>
    </div>
  )
}
