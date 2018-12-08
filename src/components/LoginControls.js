import React, { Fragment } from 'react'
import Button from './Button'
import { Button as MaterialButton } from '@material-ui/core'
import { signOut, getCachedUserDetails } from '../services/moocfi'
import { navigate } from 'gatsby'
import LoginStateContext, {
  withLoginStateContext,
} from '../contexes/LoginStateContext'

class LoginControls extends React.Component {
  static contextType = LoginStateContext

  doSignOut = e => {
    e.preventDefault()
    signOut()
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
    return this.context.loggedIn ? (
      <Fragment>
        <Button to="/profile">{this.state.name}</Button>
        <MaterialButton onClick={this.doSignOut}>Kirjaudu ulos</MaterialButton>
      </Fragment>
    ) : (
      <Fragment>
        <Button to="/sign-up">Luo uusi tunnus</Button>
        <Button to="/sign-in">Kirjaudu sisään</Button>
      </Fragment>
    )
  }
}

export default withLoginStateContext(LoginControls)
