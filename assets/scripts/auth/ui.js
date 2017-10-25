'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Your account has been successfully created')
  $('#sign-up').hide()
  $('#sign-up')[0].reset()
}
const signUpFailure = function () {
  $('#message').text('Something went wrong, please try again')
}
const signInSuccess = function (data) {
  $('#message').text('You are now signed in')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('.signed-in').show()
  $('.get').show()
  $('.display-add-form').show()
  $('#sign-in')[0].reset()
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  $('#message').text('Your password has been updated')
  $('#change-password')[0].reset()
}
const changePasswordFailure = function () {
  $('#message').text('Error changing password')
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out')
  $('#sign-in').show()
  $('#sign-up').show()
  $('.signed-in').hide()
  $('.display-add-form').hide()
  $('.get').hide()
  $('.clear').hide()
  $('.ride-list').hide()
  $('.update').hide()
  $('.add-new-ride').hide()
  $('.display-add-form').hide()
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Error signing out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
