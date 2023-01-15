import React from 'react'

export default function cours(props:any) {

    console.log(props)
    // https://api.coindesk.com/v1/bpi/currentprice.json
  return (
    <div>
      Le bitcoin est à : {props.res.bpi.EUR.rate} €
    </div>
  )
}

// Rendu côté serveur
export async function getServerSideProps(context : any) {

    console.log(context)
    const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const res = await data.json();

    return {
        props: {
            res
        }
    }
}
