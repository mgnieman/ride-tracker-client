'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onAddNewRide = (event) => {
  event.preventDefault()
  ui.addNewRide()
}

// const onAddRide = (event) => {
//   event.preventDefault()
//   api.addRide()
//     .then(ui.addRideSuccess)
//     .catch(ui.failure)
// }

const onGetRides = (event) => {
  event.preventDefault()
  api.getRides()
    .then(ui.getRidesSuccess)
    .catch(ui.failure)
}

const onClearRides = (event) => {
  event.preventDefault()
  ui.clearRides()
}

const addHandlers = () => {
  $('#addNewRideButton').on('click', onAddNewRide)
  $('#getRidesButton').on('click', onGetRides)
  $('#clearRidesButton').on('click', onClearRides)
}

module.exports = {
  addHandlers
}
