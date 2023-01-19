import axios from 'axios'
import React from 'react'

export default async function RequestAxios(route:any, config: any) {
       await axios.get(route, config)
        .then((response: any) => {
          // console.log(response.data);
          // setTrain(Array.from(response.data.journeys))
          console.log(response.data.journeys)
          // setBundle(true)
        })
        .catch((e: any) => (console.log(e))) 
}
