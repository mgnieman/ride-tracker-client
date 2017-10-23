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

const failure = () => {
  // console.error(error)
  $('message').text('Something went wrong, please try again')
}

module.exports = {
  addNewRide,
  addRideSuccess,
  getRidesSuccess,
  clearRides,
  failure
}
