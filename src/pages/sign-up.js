import React, { Fragment } from 'react'

import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import CreateAccountForm from '../components/user/CreateAccountForm'
import CourseOptionsEditor from '../components/user/CourseOptionsEditor'
import ConfirmEmail from '../components/user/ConfirmEmail'

class SignInPage extends React.Component {
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
      <Fragment>
        <Sidebar />
        <ContentArea>
          <Layout>{stepComponent}</Layout>
        </ContentArea>
      </Fragment>
    )
  }
}

export default SignInPage
