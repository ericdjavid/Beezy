import React from 'react'

// https://api.quotable.io/random
export async function getStaticProps() {
    const quote = await fetch("https://api.quotable.io/random") 
    const data = await quote.json()
    
    if (data.length === 0)
    {
      return {
        notFound : true
      }
    }

    // if (data.length === 0)
    // {
    //   return {
    //     redirect: {
    //       destination: "/"
    //     }
    //   }
    // }

    return {
        props: {
            data
        },
        revalidate: 20
    }
}

export default function Generator(props: any) {

    console.log(props)
  return (
    <div>
    {props.data.content}
    {props.data.author}
    </div>
  )
}
