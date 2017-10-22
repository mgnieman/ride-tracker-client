'use strict'

const app = require('../app.js')

const getRides = function () {
  return $.ajax({
    url: app.host + '/rides', // "http://book-json.herokuapp.com/books"
    method: 'GET'
  })
}

module.exports = {
  getRides
}
