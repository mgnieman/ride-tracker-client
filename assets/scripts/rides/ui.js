'use strict'

const showRidesTemplate = require('../templates/ride-listing.handlebars')

const getRidesSuccess = (data) => {
  console.log('button clicker')
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
  getRidesSuccess,
  clearRides,
  failure
}
