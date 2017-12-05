'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const getRides = () => {
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
const displayEditForm = () => {
  ui.displayEditForm(event)
  const index = $(event.target).attr('data-id')
  addUpdateHandlers()
  return index
}
const onUpdateRide = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateRide(data)
    .then(getRides)
    .then(ui.updateRideSuccess)
    .catch(ui.failure)
}
const onCancelAdd = () => {
  ui.cancelAddSuccess()
}
const onCancelEdit = () => {
  ui.cancelAddSuccess()
}

const addHandlers = () => {
  $('#add-ride-button').on('click', onAddButton)
  $('#add-ride').on('submit', onAddRide)
  $('#cancel-add').on('click', onCancelAdd)
}
const addRowHandlers = () => {
  $('.deleteRideButton').on('click', onDeleteRide)
  $('.editRideButton').on('click', displayEditForm)
  $('#cancel-edit').on('click', onCancelEdit)
}
const addUpdateHandlers = () => {
  $('#update-ride').on('submit', onUpdateRide)
}

module.exports = {
  addHandlers,
  getRides
}
