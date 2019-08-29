/* global gapi */

import axios from 'axios'
import React from 'react'

export default class FreeBusy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      calendars: {}
    }
  }

  async componentDidMount() {
    const body = {
      timeMin: '2019-06-15T18:00:00-04:00',
      timeMax: '2019-06-22T18:45:00-04:00',
      timeZone: 'UTC-4:00',
      items: [
        {
          id: '88ubsf2to8vip8g5c1k3u7nq7s@group.calendar.google.com'
        },
        {
          id: 'h8000205t1c8703u5ljtkd33c8@group.calendar.google.com'
        },
        {
          id: 'ae5p1rh98tk006p4oco2m79odk@group.calendar.google.com'
        }
      ]
    }
    const res = await axios.post(
      'https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyAXOTSq8HAaWP59Rgtpz8PmuPcuHoXZnO8',
      body
    )
    console.log(res.data)
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}
