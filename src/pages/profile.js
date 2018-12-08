import React from 'react'

import Layout from '../templates/Layout'
import CourseOptionsEditor from '../components/user/CourseOptionsEditor'
import { navigate } from 'gatsby'
import LoginStateContext, {
  withLoginStateContext,
} from '../contexes/LoginStateContext'
import Container from '../components/Container'

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
        <Container>
          <h1>Profiili</h1>

          <p>
            Täällä voit muokata mooc.fi -tilisi asetuksia tämän kurssin osalta.
            Katso myös profiilisi mooc.fi:n Test My Code -palvelussa:{' '}
            <a href="https://tmc.mooc.fi">https://tmc.mooc.fi</a>.
          </p>
          <CourseOptionsEditor onComplete={this.onStepComplete} />
        </Container>
      </Layout>
    )
  }
}

export default withLoginStateContext(MissingInfo)
