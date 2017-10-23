'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onAddNewRide = (event) => {
  event.preventDefault()
  ui.addNewRide()
}

// USE FOR EDIT RIDE?
// const onAddRide = (data) => {
//   event.preventDefault()
//   console.log('submit new ride info')
//   api.addRide(data)
//     .then(ui.addRideSuccess)
//     .catch(ui.failure)
// }

const onAddRide = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addRide(data)
    .then(ui.addRideSuccess)
    .catch(ui.failure)
}

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
  $('#add-ride').on('submit', onAddRide)
  $('#getRidesButton').on('click', onGetRides)
  $('#clearRidesButton').on('click', onClearRides)
}

module.exports = {
  addHandlers
}
