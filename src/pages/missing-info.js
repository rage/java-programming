import React, { Fragment } from 'react'

import Layout from '../templates/layout'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import CourseOptionsEditor from '../components/user/CourseOptionsEditor'
import { navigate } from 'gatsby'
import LoginStateContext from '../contexes/LoginStateContext';

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
      <Fragment>
        <Sidebar />
        <ContentArea>
          <Layout>
            <CourseOptionsEditor onComplete={this.onStepComplete} />
          </Layout>
        </ContentArea>
      </Fragment>
    )
  }
}

export default MissingInfo
