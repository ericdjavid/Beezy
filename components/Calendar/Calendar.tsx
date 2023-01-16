import React, { useEffect, useState } from 'react';
import { useAuth } from './auth-context';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'flowbite-react';
import Link from 'next/link';

function Calendar() {

  const [step, setStep] = useState(0)
  const { setAuthTokens, accessToken } = useAuth();
  const [data, setData] = useState<any>(null)
  const [calendar, setCalendar] = useState<any>(null)
  const [events, setEvents] = useState<any>(null)
  const [selected, setSelected] = useState<any>([])

  // const gapi = window.gapi

  const login = useGoogleLogin({
    onSuccess: (tokenResponse: any) => (
      console.log(tokenResponse),
      setData(tokenResponse)
    )
  })

  async function handleLog() {
    // find a way to await
    login()
  }

  function handleTick(e: any) {
    console.log(e)
    const config: any = {
      headers: {
        Authorization: "Bearer " + data.access_token,
        Accept: "application/json"
      },
      params: {
        key: process.env.REACT_APP_GOOGLE_API_KEY,
        // maxResults: 10,
        timeMin: new Date().toISOString()
      }
    }

    axios.get(`https://www.googleapis.com/calendar/v3/calendars/${e}/events`, config)
      .then((response: any) => {
        console.log(response.data.items);
        setEvents(Array.from(response.data.items))
      })
      .catch((e: any) => (console.log(e)))
  }

  useEffect(() => {
    if (data != null) {
      console.log(data)

      const config: any = {
        headers: {
          Authorization: "Bearer " + data.access_token,
          Accept: "application/json"
        },
        params: {
          key: process.env.REACT_APP_GOOGLE_API_KEY
        }
      }

      axios.get("https://www.googleapis.com/calendar/v3/users/me/calendarList", config)
        .then((response: any) => {
          console.log(response.data);
          setCalendar(Array.from(response.data.items))
          console.log(calendar)
        })
        .catch((e: any) => (console.log(e)))
    }
  }, [data])

  return (
    <>
      <button className='m-3 p-3 border rounded-lg hover:bg-slate-200' onClick={() => handleLog()}>
        Synchronize your Google Calendar 🚀{' '}
      </button>

      <h1 className="text-3xl text-center p-3">Select Calendar</h1>
      <div className='container flex flex-row flex-wrap gap-4 justify-center'>
        {!calendar && (<div>No calendars yet </div>)}
        {calendar && (calendar.map((e: any) => (
          <Card className='w-1/6'
            key={uuidv4()}
          >
            <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-auto">
              {e?.summary}
            </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Time Zone: {e?.timeZone}
            </p>
            <input type="checkbox" value={e?.id} onClick={() => (handleTick(e?.id))} />
          </Card>
        ))
        )}
      </div>

      <div className='w-full border border-b-black-500 mt-4 mb-4 '></div>
      <h1 className="text-3xl text-center p-3">Select Events</h1>
      <div className='container flex flex-row flex-wrap gap-4 justify-center align-top'>
        {!events && (<div>No events yet </div>)}
        {events && (
          events.map((e: any) => (
            <Card className='w-1/6 m-2 flex flex-col align-top'
              key={uuidv4()}
            >

              {e.summary}
              {/* <br /> */}
              {e.start?.dateTime}
              {/* <br /> */}
              <p>
                {e.location}
              </p>
              <p>
                Select :{" "}
                <input type="checkbox" value={e?.id} onClick={() => (console.log("lol"), setSelected([...selected, e]))} />
              </p>
            </Card>
          ))
        )}
      </div>
      {selected[0] && (<Link
        className='m-5 p-3 border rounded-lg hover:bg-slate-200'
        href={{
          pathname: '/generate',
          query: selected // the data
        }}
      >GO 🚀 </Link>)}
    </>
  )
}

export default Calendar;