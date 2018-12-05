import React, { Fragment } from 'react'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import { authenticate } from '../services/moocfi'
import { navigate } from 'gatsby'
import { loggedIn } from '../services/moocfi'

import CreateAccountForm from '../components/user/CreateAccountForm'
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'

import styled from 'styled-components'
import CourseOptionsEditor from '../components/user/CourseOptionsEditor'
import ConfirmEmail from '../components/user/ConfirmEmail'

const Row = styled.div`
  margin-bottom: 1.5rem;
`

const Form = styled.form``

const Label = styled.label``

const Input = styled.input`
  width: 100%;
  padding: 0.3rem;
`

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

class SignInPage extends React.Component {
  onClick = async e => {
    e.preventDefault()
  }

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
    if (this.state.step == 1) {
      stepComponent = <CreateAccountForm onComplete={this.onStepComplete} />
    } else if (this.state.step == 2) {
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
