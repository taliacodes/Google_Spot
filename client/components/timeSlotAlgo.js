const calendars = {
  '88ubsf2to8vip8g5c1k3u7nq7s@group.calendar.google.com': {
    busy: [
      {
        start: '2019-06-16T20:00:00-04:00',
        end: '2019-06-16T22:00:00-04:00'
      },
      {
        start: '2019-06-18T20:00:00-04:00',
        end: '2019-06-18T22:15:00-04:00'
      },
      {
        start: '2019-06-20T17:30:00-04:00',
        end: '2019-06-20T19:45:00-04:00'
      },
      {
        start: '2019-06-21T19:00:00-04:00',
        end: '2019-06-21T21:15:00-04:00'
      }
    ]
  },
  'h8000205t1c8703u5ljtkd33c8@group.calendar.google.com': {
    busy: [
      {
        start: '2019-06-16T14:15:00-04:00',
        end: '2019-06-16T17:00:00-04:00'
      },
      {
        start: '2019-06-18T16:00:00-04:00',
        end: '2019-06-18T18:00:00-04:00'
      },
      {
        start: '2019-06-19T16:00:00-04:00',
        end: '2019-06-19T18:15:00-04:00'
      },
      {
        start: '2019-06-19T19:00:00-04:00',
        end: '2019-06-19T21:00:00-04:00'
      },
      {
        start: '2019-06-21T15:00:00-04:00',
        end: '2019-06-21T17:45:00-04:00'
      }
    ]
  },
  'ae5p1rh98tk006p4oco2m79odk@group.calendar.google.com': {
    busy: [
      {
        start: '2019-06-17T15:30:00-04:00',
        end: '2019-06-17T17:15:00-04:00'
      },
      {
        start: '2019-06-18T14:00:00-04:00',
        end: '2019-06-18T16:00:00-04:00'
      },
      {
        start: '2019-06-20T16:00:00-04:00',
        end: '2019-06-20T18:00:00-04:00'
      }
    ]
  }
}

//  console.log(calendars["88ubsf2to8vip8g5c1k3u7nq7s@group.calendar.google.com"].busy[2])

const cleanData = obj => {
  const allDatesObj = {}
  for (let calendar in obj) {
    const calendarObject = obj[calendar]
    const busyArray = calendarObject.busy
    for (let i = 0; i < busyArray.length; i++) {
      const busySlot = busyArray[i]
      const date = busySlot.start.slice(0, 10)
      const start =
        Math.floor(
          parseInt(
            busySlot.start
              .slice(11, 16)
              .split(':')
              .join('')
          ) / 100
        ) * 100
      let end =
        Math.ceil(
          parseInt(
            busySlot.end
              .slice(11, 16)
              .split(':')
              .join('')
          ) / 100
        ) * 100
      if (start > end) {
        end = end + 2400
      }
      if (!(date in allDatesObj)) {
        allDatesObj[date] = [[start, end]]
      } else {
        allDatesObj[date].push([start, end])
      }
    }
  }
  return allDatesObj
}

const cleanedData = cleanData(calendars)
console.log(
  '****************************************************\nthis is the cleaned data',
  cleanedData
)

const sortData = obj => {
  for (let date in obj) {
    const timeSlots = obj[date]
    timeSlots.sort(function(a, b) {
      return a[0] - b[0]
    })
  }
  return obj
}

const sortedData = sortData(cleanedData)
console.log(
  '****************************************************\nthis is the sorted data',
  sortedData
)

const freeTimes = (busyTimes, timeMin, timeMax, duration) => {
  if (timeMin === undefined) timeMin = 0
  if (timeMax === undefined) timeMax = 2400
  let firstTime = 0
  let freeTimeArr = {}
  for (let key in busyTimes) {
    freeTimeArr[key] = []
    let timeSlots = busyTimes[key]
    for (let h = timeMin; h < timeSlots[0][0]; h += 100) {
      console.log('this is h', h)
      freeTimeArr[key].push(h)
    }
    for (let i = 0; i < timeSlots.length; i++) {
      if (timeSlots[i + 1]) {
        // console.log('this is the timeslots', key, timeSlots[i][1], timeSlots[i+1][0])
        let difference = timeSlots[i + 1][0] - timeSlots[i][1]
        if (difference >= duration) {
          let originalSlot = timeSlots[i][1]
          for (let j = originalSlot; j < timeSlots[i + 1][0]; j += 100) {
            freeTimeArr[key].push(j)
          }
        }
        // for (let j = 0; i < difference)
      }
    }
    for (
      let k = timeSlots[timeSlots.length - 1][timeSlots.length - 1];
      k < timeMax;
      k += 100
    ) {
      console.log('this is k', key, k)
      freeTimeArr[key].push(k)
    }
  }
  console.log('this is the free time array', freeTimeArr)
}

//find free time slots between 6pm and 12midnight for 3 hour intervals
const freeTimeSlots = freeTimes(sortedData, 2000, 2400, 200)
console.log(
  '****************************************************\nfree times',
  freeTimeSlots
)
