
'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
//   console.log('signUpSuccess ran. Data is:', data)
  $('#sign-up').addClass('hidden')
  store.user = data.user
}
const signUpFailure = function () {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
//   console.log('signUpFailure ran. Data is:', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#add-dog').removeClass('hidden')
  $('#delete-dog').removeClass('hidden')
  $('#search-for-dogs').removeClass('hidden')
  $('.auth').addClass('hidden')
  $('#navbar').removeClass('hidden')
  $('#update-dog-form').removeClass('hidden')
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  // console.log('signInSuccessful ran. Data is:', data)
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
//   console.log('signInFailure ran. Data is:', error)
}
const changePasswordSuccess = function () {
  $('#message').text('changed password successfully')
  $('#message').css('background-color', 'green')
  // console.log('password changed successfully')
  $('#change-password-form').addClass('hidden')
}
const changePasswordFailure = function () {
  $('#message').text(`Error on change password Please Try again`)
  $('#message').css('background-color', 'red')
  // console.log('startFailure ran. Data is:', error)
}
const signOutSuccess = function () {
//   console.log('ha')
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('.auth').removeClass('hidden')
  $('#add-dog').addClass('hidden')
  $('#delete-dog').addClass('hidden')
  $('#search-for-dogs').addClass('hidden')
  $('#update-dog-form').addClass('hidden')
  $('#navbar').addClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('.search-results').html('')
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Error on sign Out')
  $('#message').css('background-color', 'red')
//   console.log('signOutFailure ran. Data is:', error)
}
const addDogSuccess = function () {
  $('#message').text('Add dog')
  $('#message').css('background-color', 'green')
  $('#signOut').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#add-dog').removeClass('hidden')
  // $('#search-for-dog').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
}
const updateDogSuccess = function () {
  $('#message').text('Updated dog')
  $('#message').css('background-color', 'green')
  // console.log('Updated Dog')
}
const searchForDogsSuccess = function (data) {
  $('.search-results').html('')
  let searchHTML = ''
  data.dogs.forEach((dog) => {
    // if (dog.user.id === store.user.id) {
      store.dogs.push(dog)
      searchHTML += `<div class="tmp">
      <h6>Breed: ${dog.breed}</h6>
      <h6>Size: ${dog.size}</h6>
      <h6>Fur: ${dog.fur}</h6>
      <h6>id${dog.id}</h6>
      </div>
      <BR>`
    // }
  })
  $('.search-results').append(searchHTML)
}

const updateDogFailure = function () {
  $('#message').text('This is not your dog!')
  $('#message').css('background-color', 'red')
//   console.log('updateFailure ran. Data is:', error)
}

const deleteDogSuccess = function (data) {
  $('#message').text('Deleted Successfully')
  $('#message').css('background-color', 'green')
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
  $('#delete-dog')[0].reset()
}
const addDogsFailure = function () {
    $('#message').text('Something went wrong.')
    $('#message').css('background-color', 'red')
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
  searchForDogsSuccess,
  deleteDogSuccess,
  updateDogSuccess,
  updateDogFailure
}
