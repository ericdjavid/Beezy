import axios from 'axios'
import React, { useEffect } from 'react'

export default function Train() {

  const codeStation = "stop_area:SNCF:87723197"

  console.log(process.env.REACT_APP_SNCF_API_KEY)


  const config: any = {
    headers: {
      Authorization: process.env.REACT_APP_SNCF_API_KEY,
      Accept: "application/json"
    },
    params: {
      datetime: "20230117T140726"
    }
  }

  useEffect(() => {
    axios.get(`https://api.sncf.com/v1/coverage/sncf/stop_areas/${codeStation}/departures`,config)
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
