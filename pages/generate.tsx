import React from 'react'
import { useRouter } from 'next/router'

export default function Generate() {
const router = useRouter();
const selected = router.query;
console.log(selected)
  return (
    <div>
     <h1>Generator</h1> 
    </div>
  )
}
