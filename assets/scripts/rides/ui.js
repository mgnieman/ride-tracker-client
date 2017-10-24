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

const failure = () => {
  $('message').text('Something went wrong, please try again')
}

module.exports = {
  addNewRide,
  addRideSuccess,
  getRidesSuccess,
  clearRides,
  // enterDateToDelete,
  deleteRideSuccess,
  failure
}
