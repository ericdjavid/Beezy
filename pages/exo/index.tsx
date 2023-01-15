import React from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';

export default function index(props:any) {

  console.log(props.array.forEach((element:any )=> console.log(Object.keys(element)[0]
  )))
  return (
    <>
    <h1 className='my-4'> Les listes </h1>
    <ul className='list-group'>
      {props.array.map((item: any) => (
        <li key={uuidv4()}>
          <Link href={`/exo/${item.name}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export async function getStaticProps() {
    
    const data = await import(`../../data/pathsvoc.json`)
    const array = data.englishList
    
    return {
        props : {
            array
        }
    }
}