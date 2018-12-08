import React from 'react'

import Layout from '../templates/Layout'
import CourseOptionsEditor from '../components/user/CourseOptionsEditor'
import { navigate } from 'gatsby'
import LoginStateContext, {
  withLoginStateContext,
} from '../contexes/LoginStateContext'

class MissingInfo extends React.Component {
  static contextType = LoginStateContext

  onStepComplete = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
      return
    }
    navigate('/')
  }

  render() {
    if (!this.context.loggedIn) {
      navigate('/sign-in')
      return <div>Redirecting...</div>
    }
    return (
      <Layout>
        <CourseOptionsEditor onComplete={this.onStepComplete} />
      </Layout>
    )
  }
}

export default withLoginStateContext(MissingInfo)
