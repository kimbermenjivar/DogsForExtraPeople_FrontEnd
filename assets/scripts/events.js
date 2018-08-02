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
const onAddDogs = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.addDogs(data)
    .then(ui.addDogSuccess)
    .catch(ui.addDogsFailure)
}

const onDeleteDogs = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.deleteDog(data)
    .then(ui.deleteDogSuccess)
    .catch(ui.deleteDogFailure)
}

const onSearchForDogs = function (event) {
  event.preventDefault()
  console.log('Search for Dog ran!')
  api.searchForDogs()
    .then(ui.searchForDogsSuccess)
    .catch(ui.searchForDogsFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-dog').on('submit', onAddDogs)
  $('#delete-dog').on('submit', onDeleteDogs)
  $('#search-for-dogs').on('submit', onSearchForDogs)
}
module.exports = {
  addHandlers
}
