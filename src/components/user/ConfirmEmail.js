import React from 'react'
import { Link } from 'gatsby'

import EmailExample from '../../images/email-example.png'

import styled from 'styled-components'
import withSimpleErrorBoundary from '../../util/withSimpleErrorBoundary';

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

const StyledImage = styled.img`
  width: 100%;
  padding: 1rem 0;
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
          <p>
            Olemme lähettäneet sähköpostiisi sähköpostiosoitteen
            varmistuslinkin. Käy nyt sähköpostissasi ja varmista osoitteesi.{' '}
          </p>

          <p>
            Sähköpostin pitäisi näyttää tälläiseltä:
          </p>

          <StyledImage src={EmailExample} alt="Esimerkki sähköpostista" />
        </InfoBox>
        <p>
          Tämän jälkeen voit jatkaa <Link to="/osa-1">materiaaliin</Link>.
        </p>
      </FormContainer>
    )
  }
}

export default withSimpleErrorBoundary(ConfirmEmail)
