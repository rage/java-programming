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
            <h1>Profiili</h1>

            <p>
              Täällä voit muokata mooc.fi -tilisi asetuksia tämän kurssin
              osalta. Katso myös profiilisi mooc.fi:n Test My Code -palvelussa:{' '}
              <a href="https://tmc.mooc.fi">https://tmc.mooc.fi</a>.
            </p>
            <CourseOptionsEditor onComplete={this.onStepComplete} />
          </Layout>
        </ContentArea>
      </Fragment>
    )
  }
}

export default MissingInfo
