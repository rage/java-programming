import React, { Fragment } from 'react'
import Button from './Button'
import { loggedIn, signOut } from '../services/moocfi'
import { navigate } from 'gatsby'

export default class LoginControls extends React.Component {
  doSignOut = e => {
    e.preventDefault()
    signOut()
    navigate('/')
  }

  render() {
    return loggedIn() ? (
      <Fragment>
        <Button onClick={this.doSignOut}>Kirjaudu ulos</Button>
      </Fragment>
    ) : (
      <Fragment>
        <Button to="/sign-up">Luo uusi tunnus</Button>
        <Button to="/sign-in">Kirjaudu sisään</Button>
      </Fragment>
    )
  }
}
