'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

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
  $('#addRidesButton').on('click', onGetRides)
  $('#clearRidesButton').on('click', onClearRides)
}

module.exports = {
  addHandlers
}
