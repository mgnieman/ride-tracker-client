'use strict'

const showRidesTemplate = require('../templates/ride-listing.handlebars')
const store = require('../store')

const clearRides = () => {
  $('.content').empty()
}

const addNewRide = () => {
  $('.get').hide()
  $('.content').hide()
  $('.display-add-form').hide()
  $('.update').hide()
  $('.add-new-ride').show()
}

const addRideSuccess = (data) => {
  store.rideId = data.ride.id
  $('#add-ride')[0].reset()
  $('.add-new-ride').hide()
  $('#message').text('Your ride has been added. Select Get Rides to view all your rides')
  $('.get').show()
}

const getRidesSuccess = (data) => {
  clearRides()
  const showRidesHtml = showRidesTemplate({ rides: data.rides })
  $('.content').append(showRidesHtml).show()
  $('.get').hide()
  $('.display-add-form').show()
  $('#message').text('')
}

const deleteRideSuccess = (index) => {
  clearRides()
  $('#getRidesButton').click()
  $('#message').text('Your ride has been deleted')
}

const editRideSuccess = (event) => {
  $('.update').show()
  const tr = $(event.target).parent().parent()

  const date = tr.find('td.ride-date').text()
  const dateField = $('#update-ride').find('input[name="ride[date]"]')
  dateField.attr('value', date)

  const distance = tr.find('td.ride-distance').text()
  const distanceField = $('#update-ride').find('input[name="ride[distance]"]')
  distanceField.attr('value', distance)

  const duration = tr.find('td.ride-duration').text()
  const durationField = $('#update-ride').find('input[name="ride[duration]"]')
  durationField.attr('value', duration)

  const id = $(event.target).attr('data-id')
  const idField = $('#update-ride').find('input[name="ride[id]"]')
  idField.attr('value', id)
}

const updateRideSuccess = () => {
  clearRides()
  $('#getRidesButton').click()
  $('#message').text('Your changes have been saved')
  $('#update-ride')[0].reset()
  $('.update').hide()
}

const failure = () => {
  $('#message').text('Something went wrong, please try again')
}

module.exports = {
  addNewRide,
  addRideSuccess,
  getRidesSuccess,
  clearRides,
  deleteRideSuccess,
  editRideSuccess,
  updateRideSuccess,
  failure
}
