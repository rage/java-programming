import TmcClient from 'tmc-client-js'
import fetchPonyfill from 'fetch-ponyfill'
import axios from 'axios'
import * as store from 'store'

const { fetch } = fetchPonyfill()
const BASE_URL = 'https://tmc.mooc.fi/api/v8'
// const { COURSE_ID, LOCALIZED_COURSE_ID } = config

const tmcClient = new TmcClient(
  '59a09eef080463f90f8c2f29fbf63014167d13580e1de3562e57b9e6e4515182',
  '2ddf92a15a31f87c1aabb712b7cfd1b88f3465465ec475811ccce6febb1bad28'
)

const loginStateListeners = []

export function authenticate(credentials) {
  return new Promise((resolve, reject) => {
    tmcClient.authenticate(credentials).then(
      res => {
        loginStateChanged()
        resolve(res)
      },
      err => {
        reject(err)
      }
    )
  })
}

export function createAccount(data, extra_fields, userField) {
  const body = {
    user: data,
    user_field: userField,
    origin: 'Ohjelmoinnin MOOC 2019',
  }
  if (extra_fields.language === 'fi') {
    body.language = extra_fields.language
  }
  return new Promise((resolve, reject) => {
    data['extra_fields'] = {
      namespace: 'ohjelmoinnin-mooc-2019',
      data: extra_fields,
    }
    fetch(`${BASE_URL}/users`, {
      body: JSON.stringify(body),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      res.json().then(json => {
        if (!json.success) {
          reject(json.errors)
        } else {
          resolve(json)
        }
      })
    })
  })
}

export function resetPassword(email) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/users/password_reset`, {
      body: JSON.stringify({ email: email, origin: window.location.host }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      res.json().then(json => {
        resolve(json)
      })
    })
  })
}

export function loggedIn() {
  return accessToken() ? true : false
}

export function signOut() {
  store.remove('tmc.user')
  loginStateChanged()
}

export function onLoginStateChanged(callback) {
  loginStateListeners.push(callback)
}

export function userDetails({ force = false } = {}) {
  return new Promise((resolve, reject) => {
    //const userDetails = accountState.getUserDetails()

    if (!accessToken()) {
      return reject({})
    }
    // if (userDetails && !force) {
    //   return resolve(userDetails)
    // }
    fetch(
      `${BASE_URL}/users/current?show_user_fields=true&extra_fields=ohjelmoinnin-mooc-2019`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken()}`,
        },
      }
    )
      .then(res => {
        if (!res.ok) {
          return reject(null)
        }
        res.json().then(user => {
          // accountState.setUserDetails(user)
          resolve(user)
        })
      })
      .catch(error => {
        console.error(`Failed to fetch user details: ${error}`)
        return reject(error)
      })
  })
}

const createHeader = () => ({
  Authorization: `Bearer ${accessToken()}`,
})

const setPasswordFields = (
  user,
  currentPassword,
  password,
  confirmPassword
) => {
  user['old_password'] = currentPassword
  user['password'] = password
  user['password_repeat'] = confirmPassword
}

export function updateUserDetails({ userField, extraFields, userInfo }) {
  // const oldUserDetails = accountState.getUserDetails()
  // if (!oldUserDetails) {
  //   return Promise.reject(null)
  // }

  const newUserDetails = {
    user: Object.assign({}, userInfo, {
      extra_fields: {
        namespace: 'ohjelmoinnin-mooc-2019',
        data: extraFields,
      },
    }),
    user_field: userField,
  }

  // const id = oldUserDetails.id

  // return axios.put(`${BASE_URL}/users/${id}`, newUserDetails, { headers: createHeader() })
  //   .then(() => userDetails({ force: true }))
  //   .catch((error) => {
  //     return Promise.reject(error.response)
  //   })
}

export function updatePassword(currentPassword, password, confirmPassword) {
  // const userDetails = accountState.getUserDetails()
  // if (!userDetails) {
  //   return Promise.reject(null)
  // }

  setPasswordFields(userDetails, currentPassword, password, confirmPassword)
  const id = userDetails['id']

  return axios
    .put(`${BASE_URL}/users/${id}`, userDetails, { headers: createHeader() })
    .then(res => {
      return res
    })
    .catch(error => {
      return Promise.reject(error.response)
    })
}

function loginStateChanged() {
  loginStateListeners.forEach(listener => {
    listener(loggedIn())
  })
}

function accessToken() {
  try {
    return store.get('tmc.user').accessToken || null
  } catch (error) {
    return null
  }
}
