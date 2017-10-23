'use strict'

const showRidesTemplate = require('../templates/ride-listing.handlebars')

const addNewRide = () => {
  console.log('button click')
  $('.add-new-ride').show()
}

const getRidesSuccess = (data) => {
  // console.log(data)
  const showRidesHtml = showRidesTemplate({ rides: data.rides })
  $('.content').append(showRidesHtml)
}

const clearRides = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  addNewRide,
  getRidesSuccess,
  clearRides,
  failure
}
