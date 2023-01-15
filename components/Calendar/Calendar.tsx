import React, { useEffect, useState } from 'react';
import { useAuth } from './auth-context';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

function Calendar() {

  const [step, setStep] = useState(0)
  const { setAuthTokens, accessToken } = useAuth();
  const [data, setData] = useState<any>(null)
  const [calendar, setCalendar] = useState<any>(null)
  const [events, setEvents] = useState<any>(null)

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
        Sign in with Google 🚀{' '}
      </button>

      {calendar && (calendar.map((e: any) => (
        <li>
          {e?.summary} - Time Zone: {e?.timeZone}
          <input type="checkbox" value={e?.id} onClick={() => (handleTick(e?.id))} />
        </li>
      ))

      )}

      {events && (
      events.map((e:any)=> (
        <li>
          {e.summary} - {e.start?.dateTime}
        </li>
      ))
      
      )}

    </>
  )

}

export default Calendar;