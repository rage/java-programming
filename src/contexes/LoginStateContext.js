import React from 'react'
import { loggedIn, onLoginStateChanged } from '../services/moocfi'

const LoginStateContext = React.createContext()

export class LoginStateContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: loggedIn(),
    }
  }

  componentDidMount() {
    onLoginStateChanged(loggedIn => {
      this.setState({ loggedIn })
    })
  }

  render() {
    return (
      <LoginStateContext.Provider value={{ loggedIn: this.state.loggedIn }}>
        {this.props.children}
      </LoginStateContext.Provider>
    )
  }
}

export default LoginStateContext
