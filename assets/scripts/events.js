'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  console.log('trying to sign up')
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Change Password ran!')

  const data = getFormFields(this) // this === event.target
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Sign out ran!')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onAddDog = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.addDog(data)
    .then(ui.addDogSuccess)
    .catch(ui.addDogsFailure)
}
const onSearchForDog = function (event) {
  event.preventDefault()
  console.log('Search for Dog ran!')
  api.searchForDog()
    .then(ui.searchForDogsSuccess )
    .catch(ui.searchForDogFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-dog').on('submit', onAddDog)
  $('.container').on('click', "button[id^='search-for-dog']", onSearchForDog)
}
module.exports = {
  addHandlers
}
