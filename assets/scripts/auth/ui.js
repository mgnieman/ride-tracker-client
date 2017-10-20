'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Your account has been successfully created')
  $('#sign-up').hide()
}
const signUpFailure = function () {
  $('#message').text('Something went wrong, please try again')
}
const signInSuccess = function (data) {
  $('#message').text('You are now signed in')
  $('.signed-in').show()
  $('.sign-up-in').hide()
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  $('#message').text('Your password has been updated')
}
const changePasswordFailure = function () {
  $('#message').text('Error changing password')
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out')
  $('.signed-in').hide()
  $('.sign-up-in').show()
  $('.ride-list').hide()
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
