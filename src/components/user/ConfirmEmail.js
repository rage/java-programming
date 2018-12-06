import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

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
