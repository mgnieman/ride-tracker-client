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
    // data: {
    //   'ride': {
    //     'date': data.date
    //     // 'distance': 'ride[distance]',
    //     // 'duration': 'ride[duration]'
    //   }
    // }
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

module.exports = {
  addRide,
  getRides
}
