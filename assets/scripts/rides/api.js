'use strict'

// const app = require('../app.js')
const store = require('../store')
const config = require('../config')

// const addRide = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/rides',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

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
  // addNewRide,
  getRides
}
