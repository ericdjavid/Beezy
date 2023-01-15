import { useRouter } from 'next/router'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Choice(props:any) {
    const route = useRouter()

    console.log(props)

    return (
        <div>
     <h1>{route.asPath}</h1> 
     <ul>
        {props.listeEnCours.map((item: any) => (
            <li key={uuidv4()}>
              {item.en} / {item.fr} 
            </li>
        ))}

     </ul>
    </div>
  )
}

// contect seulement utilisable avec getStaticProps
// le contexte est donné par GSPaths
export async function getStaticProps(context : any) {

    const slug = context.params.slug
    const data = await import(`../../data/pathsvoc.json`);

    const listeEnCours:any = data.englishList.find((list:any )=> list.name === slug)

    return {
        props: {
            listeEnCours: listeEnCours.data
        }
    }
}

// dès qu'on a du chemin dynamique on utilise GSPaths
export async function getStaticPaths() {
    const data = await import(`../../data/pathsvoc.json`)

    return {
        paths : [
            {params: {slug: "words"}}
        ], 
        // si je tombe sur un chemin que je n'ai pas défini, erreur 404
        fallback: false
    }
}

