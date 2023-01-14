import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

export default function Slug() {
    const router = useRouter()

    // console.log(router)
  return (
<>
<Head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{router.query.slug}</title>  
</Head>
    <div>
      lolcat
    </div>
</>
  )
}
