const router = require('express').Router()
const {Event} = require('../db/models')
//const {calculateTimeSlots} = require('../utils')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll()
    res.json(events)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  //create event
})

router.post('/analyze-times', async (req, res, next) => {
  console.log(req.body)

  //req.body {
  //calendarIDs: [

  // ]
  //}

  //call function timeSlots -- this function can be defined in another file such as timeslotalgo.js
})
