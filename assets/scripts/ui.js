'use strict'

const store = require('./store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is:', data)
  store.user = data.user
}
const signUpFailure = function (error) {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  console.log('signUpFailure ran. Data is:', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#add-dog').removeClass('hidden')
  $('#search-dog').removeClass('hidden')
  $('#search-for-dog').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  console.log('signInSuccessful ran. Data is:', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.log('signInFailure ran. Data is:', error)
}
const changePasswordSuccess = function (data) {
  $('message').text('changed password successfully')
  $('#message').css('background-color', 'red')
  console.log('startSuccess ran and nothing was returned')
  store.user = data.user
}
const changePasswordFailure = function (error) {
  $('#message').text('Error on Password change')
  $('#message').css('background-color', 'red')
  console.log('startFailure ran. Data is:', error)
}
const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  $('#signOut').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#add-dog').removeClass('hidden')
  $('#search-for-dog').removeClass('hidden')
  store.user = null
}
const signOutFailure = function (error) {
  $('#message').text('Error on sign Out')
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Data is:', error)
}
const addDogSuccess = function (data) {
  $('#message').text('Add dog')
  $('#message').css('background-color', 'green')
  $('#signOut').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#add-dog').removeClass('hidden')
  $('#search-for-dog').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
}
const searchForDogsSuccess = function (data) {
  $('.search-results').html('')
  data.dogs.forEach((dog) => {
    const searchHTML = (`\
    <div>
    <h1>Breed: ${dog.breed}</h1>\
    <h1>Size: ${dog.size}</h1>\
    <h1>Fur: ${dog.fur}</h1>\
    </div>
    `)
    $('.search-results').append(searchHTML)
  })
}

const addDogsFailure = function (error) {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure, 
  changePasswordSuccess,
  changePasswordFailure,
  addDogSuccess,
  addDogsFailure,
  searchForDogsSuccess
}
