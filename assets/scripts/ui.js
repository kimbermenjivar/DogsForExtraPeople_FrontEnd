'use strict'

const store = require('./store.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is:', data)
  $('#sign-up').addClass('hidden')
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
  $('#delete-dog').removeClass('hidden')
  $('#search-for-dogs').removeClass('hidden')
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
  console.log('password changed successfully')
  $('#change-password').addClass('hidden')
}
const changePasswordFailure = function (error) {
  $('#message').text('Error on Password change')
  $('#message').css('background-color', 'red')
  console.log('startFailure ran. Data is:', error)
}
const signOutSuccess = function (data) {
  console.log('ha')
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#add-dog').addClass('hidden')
  $('#search-for-dogs').addClass('hidden')
  $('.search-results').html('')
  store.user = null
}
const signOutFailure = function (error) {
  $('#message').text('Error on sign Out')
  $('#message').css('background-color', 'red')
  console.log('signOutFailure ran. Data is:', error)
}
const addDogsSuccess = function (data) {
  $('#message').text('Add dog')
  $('#message').css('background-color', 'green')
  $('#signOut').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#add-dog').removeClass('hidden')
  // $('#search-for-dog').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').removeClass('hidden')

}
const updateDogsSuccess = function (data) {
  $('#message').text('Updated dog')
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
  let searchHTML = ''
  data.dogs.forEach((dog) => {
    searchHTML += `<div>
    <h6>Breed: ${dog.breed}</h6>
    <h6>Size: ${dog.size}</h6>
    <h6>Fur: ${dog.fur}</h6>
    <h6>id${dog.id}</h6>
    </div>`
  })
  $('.search-results').append(searchHTML)
}

// const updateDogSuccess = function (data) {
//   return $.ajax({
//     url: config.apiupdateDogs + '/dogs/' + data.dogs,
//     method: 'PATCH',
//     data
//   })
// }
const deleteDogSuccess = function (data) {
  $('.delete-results').html('')
  let searchHTML = ''
  data.dogs.forEach((dog) => {
    searchHTML += `<div>
    <h6>Breed: ${dog.breed}</h6>
    <h6>Size: ${dog.size}</h6>
    <h6>Fur: ${dog.fur}</h6>
    <h6>${dog.id}</h6>
    </div>`
  })
  $('.delete-results').append(searchHTML)
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
  addDogsSuccess,
  addDogsFailure,
  searchForDogsSuccess,
  deleteDogSuccess,
  updateDogsSuccess
}
