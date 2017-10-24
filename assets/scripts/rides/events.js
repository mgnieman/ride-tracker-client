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
    .then((data) => {
      ui.getRidesSuccess(data)
      addDeleteHandlers()
    })
    .catch(ui.failure)
}

const onClearRides = (event) => {
  event.preventDefault()
  ui.clearRides()
}

// const onEnterDateToDelete = (event) => {
//   event.preventDefault()
//   ui.enterDateToDelete()
// }
//
// const onDeleteRide = (event) => {
//   event.preventDefault()
//   console.log('event is ', event)
//   console.log('event.target is ', event.target)
//   const data = getFormFields(event.target)
//   api.deleteRide(data)
//     .then(ui.deleteRideSuccess)
//     .catch(ui.failure)
// }

const onDeleteRide = (event) => {
  event.preventDefault()
  const index = $(event.target).attr('data-id')
  api.deleteRide(index)
    .then(() => {
      ui.deleteRideSuccess(index)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#addNewRideButton').on('click', onAddNewRide)
  $('#add-ride').on('submit', onAddRide)
  $('#getRidesButton').on('click', onGetRides)
  $('#clearRidesButton').on('click', onClearRides)
  // $('#enterDateToDeleteButton').on('click', onEnterDateToDelete)
  // $('#delete-ride').on('submit', onDeleteRide)
}

const addDeleteHandlers = () => {
  $('.deleteRideButton').on('click', onDeleteRide)
}

module.exports = {
  addHandlers
}
