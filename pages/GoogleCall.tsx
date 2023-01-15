import React from 'react'

import { gapi } from "gapi-script";

export default function GoogleCall() {

const calendarID = process.env.REACT_APP_CALENDAR_ID;
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">
    React App with Google Calendar API!
  </h1>
    </>
)}


const getEvents = (calendarID:any, apiKey: any) => {
    
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
  
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
  
        .then(
          (response: any) => {
            let events = response.result.items;
            return events;
          },
          function (err: any) {
            return [false, err];
          }
        );
    }
  
    gapi.load("client", initiate);
  
  };