'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onAddNewRide = (event) => {
  event.preventDefault()
  ui.addNewRide()
}
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
      addRowHandlers()
    })
    .catch(ui.failure)
}
const onClearRides = (event) => {
  event.preventDefault()
  ui.clearRides()
}
const onDeleteRide = (event) => {
  event.preventDefault()
  const index = $(event.target).attr('data-id')
  api.deleteRide(index)
    .then(() => {
      ui.deleteRideSuccess(index)
    })
    .catch(ui.failure)
}
const onEditRide = () => {
  ui.editRideSuccess(event)
  const index = $(event.target).attr('data-id')
  addUpdateHandlers()
  return index
}

const onUpdateRide = (event) => {
  event.preventDefault()
  // console.log('onEditRide.index', onEditRide)
  console.log('update event.target is ', event.target)
  // const index = $(event.target).attr('data-id')
  // console.log('update index is', index)
  const data = getFormFields(event.target)
  api.updateRide(data)
    .then(ui.updateRideSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#addNewRideButton').on('click', onAddNewRide)
  $('#add-ride').on('submit', onAddRide)
  $('#getRidesButton').on('click', onGetRides)
  $('#clearRidesButton').on('click', onClearRides)
}

const addRowHandlers = () => {
  $('.deleteRideButton').on('click', onDeleteRide)
  $('.editRideButton').on('click', onEditRide)
}

const addUpdateHandlers = () => {
  $('#update-ride').on('submit', onUpdateRide)
}

module.exports = {
  addHandlers
}
