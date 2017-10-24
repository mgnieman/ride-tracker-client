'use strict'

const showRidesTemplate = require('../templates/ride-listing.handlebars')
const store = require('../store')

const addNewRide = () => {
  // $('.get').hide()
  $('.display-add-form').hide()
  $('.add-new-ride').show()
}

const addRideSuccess = (data) => {
  store.rideId = data.ride.id
  $('#message').text('Your ride has been added')
}

const getRidesSuccess = (data) => {
  // console.log(data)
  const showRidesHtml = showRidesTemplate({ rides: data.rides })
  $('.content').append(showRidesHtml)
  $('.get').hide()
  $('.clear').show()
}

const clearRides = () => {
  $('.content').empty()
  $('.clear').hide()
  $('.get').show()
}

// const enterDateToDelete = () => {
//   $('.add-new-ride').hide()
//   $('.delete-a-ride').show()
// }

const deleteRideSuccess = (index) => {
  console.log('index', index)
  // const showRidesHtml = showRidesTemplate({ rides: data.rides })
  // // console.log('data.rides is ', data.rides)
  // $('.content').append(showRidesHtml)
  $('#clearRidesButton').click()
  $('#getRidesButton').click()
  $('#message').text('Your ride has been deleted')
}

const editRideSuccess = (event) => {
  $('.update').show()
  // prefill Date, Distance, Duration
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

const failure = () => {
  $('message').text('Something went wrong, please try again')
}

module.exports = {
  addNewRide,
  addRideSuccess,
  getRidesSuccess,
  clearRides,
  deleteRideSuccess,
  editRideSuccess,
  failure
}
