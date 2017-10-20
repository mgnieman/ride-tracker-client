'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#winLoseMessage').hide()
}
const startNewButton = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
const onStoreNewMove = function (data) {
  api.storeNewMove(data)
    .then(ui.storeMoveSuccess)
    .catch(ui.storeMoveFailure)
}
const onGetGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('click', startNewButton)
  $('#get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  onStoreNewMove
}
