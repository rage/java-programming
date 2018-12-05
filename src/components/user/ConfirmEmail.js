import React, { Fragment } from 'react'
import Layout from '../layout'
import Banner from '../Banner'
import Sidebar from '../Sidebar'
import ContentArea from '../ContentArea'
import { authenticate } from '../../services/moocfi'
import { Link } from 'gatsby'
import { loggedIn } from '../../services/moocfi'
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'

import styled from 'styled-components'
import CourseOptionsEditor from '../user/CourseOptionsEditor'

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

class ConfirmEmail extends React.Component {
  onClick = async e => {
    e.preventDefault()
  }

  state = {
    email: undefined,
    password: undefined,
    submitting: false,
    error: false,
  }

  render() {
    return (
      <FormContainer>
        <h1>Tervetuloa kurssille!</h1>
        <InfoBox>
          Olemme lähettäneet sähköpostiisi sähköpostiosoitteen varmistuslinkin.
          Käy nyt sähköpostissasi ja varmista osoitteesi.
        </InfoBox>
        <p>
          Tämän jälkeen voit jatkaa <Link to="/osa-1">materiaaliin</Link>.
        </p>
      </FormContainer>
    )
  }
}

export default ConfirmEmail
