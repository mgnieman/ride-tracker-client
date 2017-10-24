'use strict'

const store = require('../store')
const config = require('../config')

const addRide = function (data) {
  return $.ajax({
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
    url: config.apiOrigin + '/rides',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRide = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/rides/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRide = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/rides/' + data.ride.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  addRide,
  getRides,
  deleteRide,
  updateRide
}
