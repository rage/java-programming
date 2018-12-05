import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { onLoginStateChanged, loggedIn, userDetails } from '../../services/moocfi'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      this.messages = currentLocale()
        ? messages[currentLocale()]
        : enMessages

      this.state = {
        authUser: null,
        loggedIn: loggedIn(),
      }
    }

    getChildContext() {
      return {
        authUser: this.state.authUser,
        loggedIn: this.state.loggedIn,
      }
    }

    componentDidMount() {
      onLoginStateChanged(loggedIn => {
        loggedIn
          ? this.setState(() => ({ loggedIn }))
          : this.setState(() => ({ loggedIn: false }))
        })

      userDetails()
        .then(details => {
          this.setState({user: details})
        })
        .catch(err => {
          this.setState({ user: undefined })
        })
    }

    render() {
      let path

      if (this.props && this.props.location) {
        path = this.props.location.pathname
      }

      //const user = accountState.getUserDetails() || this.state.user
      const user = accountState.getUserDetails() || this.state.user

      if (user && path &&
          !~path.indexOf('missinginfo') &&
          !~path.indexOf('signin')) {
        // TODO: check if user has an empty language field and force fill it?
        let data
        if (user && user.extra_fields) {
          data = _.omit(user.extra_fields, 'language')
        }
        if (!data || Object.keys(data).length === 0) {
          return <Redirect to={`${this.messages['routes.MISSING_INFO']}?${path}`}/>
        }
      }

      return <Component {...this.props} />
    }
  }

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.object,
    loggedIn: PropTypes.bool,
  }

  return WithAuthentication
}

export default withAuthentication
