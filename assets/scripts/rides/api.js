'use strict'

// const app = require('../app.js')
const store = require('../store')
const config = require('../config')

// USE FOR EDIT RIDE?
// const addRide = function (data) {
//   return $.ajax({
//     // url: config.apiOrigin + '/rides/' + store.rideId,
//     url: config.apiOrigin + '/rides/',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const addRide = function (data) {
  console.log('data', data)
  return $.ajax({
    // url: config.apiOrigin + '/rides/' + store.rideId,
    url: config.apiOrigin + '/rides',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getRides = function () {
  return $.ajax({
    // url: app.host + '/rides',
    url: config.apiOrigin + '/rides',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const deleteRide = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/rides/' + data.rideId,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

const deleteRide = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/rides/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

module.exports = {
  addRide,
  getRides,
  deleteRide
}
