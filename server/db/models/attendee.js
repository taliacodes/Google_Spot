const Sequelize = require('sequelize')
const db = require('../db')

const Attendee = db.define('attendee', {
  lastLocation: {
    type: Sequelize.STRING,
    allowNull: true
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  RSVP: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Attendee
