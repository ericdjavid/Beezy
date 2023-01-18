import axios from 'axios'
import React, { useEffect } from 'react'

export default function Train() {

  const codeStation = "2.3522219;48.856614"
  const codeStation2 = "4.835659;45.764043"

  console.log(process.env.REACT_APP_SNCF_API_KEY)


  const config: any = {
    headers: {
      // Authorization: process.env.REACT_APP_SNCF_API_KEY,
      Authorization: "b01ed748-2f9e-4bc3-a309-e0be976c027f",
      Accept: "application/json"
    },
    params: {
      datetime: "20230117T140726"
    }
  }

  useEffect(() => {
    // axios.get(`https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/departures`,config)
    axios.get(`https://api.sncf.com/v1/coverage/sncf/journeys?count=10&depth=2&from=${codeStation}&to=${codeStation2}`,config)
      .then((response: any) => {
        console.log(response.data);
        // setCalendar(Array.from(response.data.items))
        // console.log(calendar)
      })
      .catch((e: any) => (console.log(e)))
  }, [])

  return (
    <div>
      <h1>
        Displaying train API
      </h1>
    </div>
  )
}
