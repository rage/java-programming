import React, { Fragment } from 'react'

import { loggedIn } from '../services/moocfi'

import Layout from '../templates/layout'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import CourseOptionsEditor from '../components/user/CourseOptionsEditor'
import { navigate } from 'gatsby'

class MissingInfo extends React.Component {
  onStepComplete = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
      return
    }
    navigate('/')
  }

  render() {
    if (!loggedIn()) {
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
