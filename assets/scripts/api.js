'use strict'

import {
  apiUrl
} from './config'
import {
  user
} from './store'

const signUp = function (data) {
  console.log(apiUrl + '/sign-up')
  return $.ajax({
    url: apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
