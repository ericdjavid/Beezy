import React from 'react'
import Calendar from '../components/Calendar/Calendar'

export default function cours(props:any) {

    console.log(props)
    // https://api.coindesk.com/v1/bpi/currentprice.json
  return (
    <>
      {/* Le bitcoin est à : {props.res.bpi.EUR.rate} €
      <br/> */}
      <Calendar/>
    </>
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
