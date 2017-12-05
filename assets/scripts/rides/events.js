'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const getRides = () => {
  // event.preventDefault()
  api.getRides()
    .then((data) => {
      ui.getRidesSuccess(data)
      addRowHandlers()
    })
    .catch(ui.failure)
}
const onAddButton = (event) => {
  event.preventDefault()
  ui.displayAddForm()
}
const onAddRide = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addRide(data)
    .then(ui.addRideSuccess)
    // .then(getRides)
    .catch(ui.failure)
}
const onDeleteRide = (event) => {
  event.preventDefault()
  const index = $(event.target).attr('data-id')
  api.deleteRide(index)
    .then(() => {
      ui.deleteRideSuccess(index)
    })
    .then(getRides)
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
  const data = getFormFields(event.target)
  api.updateRide(data)
    .then(ui.updateRideSuccess)
    .catch(ui.failure)
}
const addHandlers = () => {
  $('#add-ride-button').on('click', onAddButton)
  $('#add-ride').on('submit', onAddRide)
  // $('#getRidesButton').on('click', onGetRides)
}
const addRowHandlers = () => {
  $('.deleteRideButton').on('click', onDeleteRide)
  $('.editRideButton').on('click', onEditRide)
}
const addUpdateHandlers = () => {
  $('#update-ride').on('submit', onUpdateRide)
}

module.exports = {
  addHandlers,
  getRides
}
