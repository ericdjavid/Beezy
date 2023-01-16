import React from 'react'
import { useRouter } from 'next/router'

export default function generate() {
const router = useRouter();
const data = router.query;
console.log(data)
  return (
    <div>
     <h1>Generator</h1> 
    </div>
  )
}
