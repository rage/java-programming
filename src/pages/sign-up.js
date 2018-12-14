import React from 'react'

import { navigate } from 'gatsby'

import Layout from '../templates/Layout'
import CreateAccountForm from '../components/user/CreateAccountForm'
import CourseOptionsEditor from '../components/user/CourseOptionsEditor'
import ConfirmEmail from '../components/user/ConfirmEmail'
import LoginStateContext, {
  withLoginStateContext,
} from '../contexes/LoginStateContext'
import Container from '../components/Container'

class SignInPage extends React.Component {
  static contextType = LoginStateContext

  state = {
    step: 1,
  }

  onStepComplete = () => {
    this.setState(prevState => ({
      step: prevState.step + 1,
    }))
  }

  render() {
    let stepComponent
    if (this.state.step === 1) {
      stepComponent = <CreateAccountForm onComplete={this.onStepComplete} />
    } else if (this.state.step === 2) {
      stepComponent = <CourseOptionsEditor onComplete={this.onStepComplete} />
    } else {
      stepComponent = <ConfirmEmail onComplete={this.onStepComplete} />
    }

    return (
      <Layout>
        <Container>{stepComponent}</Container>
      </Layout>
    )
  }
}

export default withLoginStateContext(SignInPage)
