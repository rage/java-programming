import React, { Fragment } from 'react'
import Button from './Button'
import { loggedIn, signOut, getCachedUserDetails } from '../services/moocfi'
import { navigate } from 'gatsby'

export default class LoginControls extends React.Component {
  doSignOut = e => {
    e.preventDefault()
    signOut()
    navigate('/')
  }

  async componentDidMount() {
    const details = await getCachedUserDetails()
    let name = `${details?.user_field?.first_name || ''} ${details?.user_field
      ?.last_name || ''}`.trim()
    if (name === '') {
      name = details.email
    }
    this.setState({
      name,
    })
  }

  state = {
    name: 'Loading...',
  }

  render() {
    return loggedIn() ? (
      <Fragment>
        <Button to="/profile">{this.state.name}</Button>
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
