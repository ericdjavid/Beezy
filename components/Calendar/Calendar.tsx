import React, { useEffect, useState } from 'react';
import AutoComplete from "react-google-autocomplete";
import { useAuth } from './auth-context';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'flowbite-react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import Geocode from "react-geocode";
import { format } from 'date-fns'

function Calendar() {
  const notify = () => toast('Here is your toast.');
  const [step, setStep] = useState(0)
  const { setAuthTokens, accessToken } = useAuth();
  const [data, setData] = useState<any>(null)
  const [calendar, setCalendar] = useState<any>(null)
  const [events, setEvents] = useState<any>(null)
  const [selected, setSelected] = useState<any>([])
  const [homeTown, setHomeTown] = useState<any>(null)
  const [train, setTrain] = useState<any>([])
  const [bundle, setBundle] = useState<boolean>(false)


  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey("AIzaSyCD5b-L6M2SS7IJS1WJvkI7tvIrC0fEcqc");

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  // SNCF Config
  const config: any = {
    headers: {
      // Authorization: process.env.REACT_APP_SNCF_API_KEY,
      Authorization: "b01ed748-2f9e-4bc3-a309-e0be976c027f",
      Accept: "application/json"
    },
    params: {
      datetime: null
    }
  }

  // Bundles Generator
  async function handleBundle() {

    //!! HOME TOWN 
    if (!homeTown)
    {
      toast.error("Please set your home town.")
      return ;
    }
    // Get latitude & longitude from address.
    console.log(homeTown)
    let homeTownLoc: string = ""
    await Geocode.fromAddress(homeTown).then(
      (response) => {
        console.log(response)
        const { lat, lng } = response.results[0].geometry.location;
        // console.log(lat, lng);
        homeTownLoc = lng + ";" + lat
      },
        )        .catch((e: any) => (
          toast.error("There was an error."),
          console.log(e)
          ))
      
      //!! ITERATE THROUGH SELECTED EVENTS
      for (let i = 0; i < selected.length; i++) {
        console.log(selected[i])
        config.params.datetime = new Date(selected[i].start.dateTime)
        const { lat, lng } = selected[i].geoLoc.results[0].geometry.location
        const v1 = lng + ";" + lat
        
        if (i === selected.length - 1)
        v1 === homeTownLoc
        
        let v0;
        if (i === 0)
        v0 = homeTownLoc;
        else {
          const { lat, lng } = selected[i - 1].geoLoc.results[0].geometry.location
          v0 = lng + ";" + lat
        }
        await axios.get(`https://api.sncf.com/v1/coverage/sncf/journeys?count=10&depth=2&from=${v0}&to=${v1}`, config)
        .then((response: any) => {
          // console.log(response.data);
          // setTrain(Array.from(response.data.journeys))
          setTrain(() => ([...train, response.data.journeys[0]]))
          console.log(response.data.journeys)
          // setBundle(true)
        })
        .catch((e: any) => (
          toast.error("There was an error."),
          console.log(e)
          ))
        
      // ADD HOTEL IF OTHER DATE
    }

    const { lat, lng } = selected[selected.length - 1].geoLoc.results[0].geometry.location
    const v1 = lng + ";" + lat
    await axios.get(`https://api.sncf.com/v1/coverage/sncf/journeys?count=10&depth=2&from=${v1}&to=${homeTownLoc}`, config)
      .then((response: any) => {
        // console.log(response.data);
        setTrain(() => ([...train, response.data.journeys[0]]))
        // console.log(response.data.journeys)
      })
        .catch((e: any) => (
          toast.error("There was an error."),
          console.log(e)
          ))
    console.log(train)

    setBundle(true)

  }


  // Login button
  const login = useGoogleLogin({
    onSuccess: (tokenResponse: any) => (
      console.log(tokenResponse),
      setData(tokenResponse)
    ),
    scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"

  })

  useEffect(() => {
    console.log(selected)
  }, [selected])

  async function handleLog() {
    // find a way to await
    login()
  }

  async function axCall(item: any) {
    {
      const newItem = item;
      let address = ''
      if (item?.location)
        address = item.location
      else
        return item

      // TODO set the good date
      // var numDate= new Date(item.start.dateTime);
      // newItem.start.theDate = numDate;

      console.log(address)
      await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCD5b-L6M2SS7IJS1WJvkI7tvIrC0fEcqc`)
        .then(response => {
          console.log(response.data);
          newItem.geoLoc = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      return (newItem)
    }
  }

  async function handleTick(e: any) {
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

    await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${e}/events`, config)
      .then(async (response: any) => {
        // console.log(response.data.items);
        // setEvents(Array.from(response.data.items))
        const newEvents: any = await Promise.all(Array.from(response.data.items).map((item: any) => (axCall(item))
        ))
        setEvents(newEvents)
        console.log(events)
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

  if (step === 0)
    return (
      <>
        <button className='m-3 p-3 border rounded-lg hover:bg-slate-200' onClick={() => handleLog()}>
          Synchronize your Google Calendar 🚀{' '}
        </button>

        <h1 className="text-3xl text-center p-3">Select Calendar</h1>
        <div className='w-full flex flex-row flex-wrap gap-4 justify-center m-1'>
          {!calendar && (<div>No calendars yet </div>)}
          {calendar && (calendar.map((e: any) => (
            <Card className='sm:w-full md:w-1/3 xl:w-1/4'
              key={uuidv4()}
            >
              <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-auto sm:text-base">
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
        <div className='w-full flex flex-row flex-wrap gap-4 justify-center align-top'>
          {!events && (<div>No events yet </div>)}
          {events && (
            events.map((e: any) => (
            <Card className='sm:w-full md:w-1/3 xl:w-1/4'
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
                  <input type="checkbox" value={e?.id} onClick={() => (setSelected([...selected, e]))} />
                </p>
              </Card>
            ))
          )}
        </div>
        {selected[0] && (<button
          className='m-5 p-3 border rounded-lg hover:bg-slate-200'
          onClick={() => setStep(step + 1)}
        >Select events 🚀 </button>)}
      </>
    )

  if (step === 1)
    return (
      <>
        <h1 className=" text-4xl text-center p-8 font-bold">Nouveau Voyage</h1>
        <div className='w-full p-5 flex justify-center flex-wrap xs:flex-col sm:flex-col md:flex-col xl:flex-row'>
          <div className='flex flex-col p-3 align-middle justify-center'>
            <div>Select home city 🏠</div>
            <div className='border p-1'>
              <AutoComplete
                // defaultValue={"Paris, France"}
                options={["(regions)"]}
                apiKey="AIzaSyCD5b-L6M2SS7IJS1WJvkI7tvIrC0fEcqc"
                onPlaceSelected={(place: any) => (setHomeTown(place?.formatted_address))}
              />
            </div>

          </div>
          <div className='flex flex-col justify-center align-middle text-center'>
            <div className=' text-white'>test</div>
            <div>
              <hr className="h-px my-8 bg-gray-800 border-0 dark:bg-gray-700"/>Travel ✈️
              <input type="checkbox" checked={true} />
            </div>
          </div>
          {selected && (
            selected.sort((a: any, b: any) => a.start?.dateTime - b.start?.dateTime).map((e: any) => (
              <>
                <Card className='sm:w-1/2 md:w-1/6 h-60 flex flex-col align-top m-3'
                  key={uuidv4()}
                >
                  <div className='font-bold text-1xl'>
                    {e.summary}
                    </div>
                  {/* {e.start?.dateTime} */}
                {format(new Date(e.start?.dateTime), 'dd MMMM yyy p')}
                  <p>
                    {e.location ? e.location : "Address missing 😢 - define an address (add Google address bar)"}
                  </p>
                  <p>
                  </p>
                </Card>
                <div className='flex flex-col justify-center align-middle text-center'>
                  {e != selected[selected.length - 1] && (
                    <>
                      <div>Sleep 🛏️{"   "}
                        <input type="checkbox" checked={true} value={e?.id} onClick={() => (console.log(e))} />
                      </div>
                  
              <hr className="h-px my-8 bg-gray-800 border-0 dark:bg-gray-700"/>

                    </>
                  )}

                  <div>Travel ✈️{" "}

                    <input type="checkbox" checked={true} value={e?.id} onClick={() => (console.log(e))} />
                  </div>
                </div>
              </>
            ))
          )}
        </div>
        <div className='w-full mt-5 flex align-middle justify-center'>
          <button className='btn btn-gradient-border' onClick={handleBundle}>
            Generer bundles
          </button>
        </div>
        {bundle && (
        <h1 className=' text-3xl p-5 text-center'>BUNDLE 1</h1>
        )}
        {bundle && (
          train.map((train: any) => (
            <div className='w-full flex align-middle justify-center'
            key={uuidv4()}
            >
              <div className='p-5 m-5 border rounded-md shadow-sm sm:w-full md:w-1/3'>
                <div className='flex'>Départ: {train.departure_date_time}
                  {/* {format(train[0].departure_date_time, 'dd/mm/yyyy')} */}
                </div>
                <div className='flex'>Emission CO²: {train.co2_emission?.value} gEC</div>
                <br />
                <div className='text-2xl'>Sections</div>
                <div>From: {train.sections[0].from.name}</div>
                {train.sections && train.sections.map((e: any) => (
                  <div
                  className='sm:w-full'
                  key={uuidv4()}
                  >

                    {e.mode ? 'Walking 🚶' : null}
                    {e?.type === "public_transport" ? e?.display_informations?.commercial_mode + " - " + e?.display_informations?.name : null}
                    {e?.type === "transfer" ? "Transfer" : null}
                    {e?.type === "waiting" ? "Waiting" : null}
                  </div>
                ))}
                To: {train.sections[train.sections.length - 1].to.address.label}
              </div>
            </div>
          ))
        )
        }
      </>
    )

    else 
        return (<></>)
}

export default Calendar;