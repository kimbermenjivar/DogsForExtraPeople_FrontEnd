'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const clearTMP = () => {
  $('.search-results').children('div').remove()
}
const onSignUp = function (event) {
//   console.log('trying to sign up')
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
  // console.log('Change Password ran!')

  const data = getFormFields(event.target) // this === event.target
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
  // console.log(data)
}

const showChangePassword = function () {
  $('#change-password-form').removeClass('hidden')
}

const onSignOut = function (event) {
  event.preventDefault()
//   console.log('Sign out ran!')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onAddDog = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.addDogs(data)
    .then(ui.addDogSuccess)
    .then(() => {
        $('#add-dog')[0].reset()
    })
    .catch(ui.addDogsFailure)
}
const onUpdateDog = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateDog(data)
    .then(ui.updateDogSuccess)
    .then(() => {
        $('#update-dog-form')[0].reset()
    })
    .catch(ui.updateDogFailure)
}

const onDeleteDogs = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.deleteDog(data)
    .then(ui.deleteDogSuccess)
    .catch(ui.deleteDogFailure)
}

const onSearchForDogs = function (event) {
  clearTMP()
  event.preventDefault()
//   console.log('Search for Dog ran!')
  api.searchForDogs()
    .then(ui.searchForDogsSuccess)
    .catch(ui.searchForDogsFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#show-change-password').on('click', showChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#add-dog').on('submit', onAddDog)
  $('#delete-dog').on('submit', onDeleteDogs)
  $('#search-for-dogs').on('submit', onSearchForDogs)
  $('#update-dog-form').on('submit', onUpdateDog)
}

module.exports = {
  addHandlers
}
