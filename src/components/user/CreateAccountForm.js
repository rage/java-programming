import React from 'react'
import { Link } from 'gatsby'
import { TextField, Button } from '@material-ui/core'

import styled from 'styled-components'

const Row = styled.div`
  margin-bottom: 1.5rem;
`

const Form = styled.form``

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

class CreateAccountForm extends React.Component {
  onClick = async e => {
    e.preventDefault()
    this.props.onComplete()
  }

  state = {
    email: undefined,
    password: undefined,
    password_confirmation: undefined,
    submitting: false,
    error: false,
  }

  render() {
    return (
      <FormContainer>
        <h1>Luo käyttäjätunnus</h1>
        <Form>
          <InfoBox>
            Tämä kurssi käyttää{' '}
            <a href="https://mooc.fi" target="_blank" rel="noopener noreferrer">
              mooc.fi
            </a>{' '}
            käyttäjätunnuksia. Jos olet aikaisemmin tehnyt mooc.fi -kursseja
            voit käyttää sisäänkirjautumissivulla olemassaolevia tunnuksiasi.
            Tällä sivulla voit luoda uuden tunnuksen, mitä voi käyttää mooc.fi:n
            kursseilla.
          </InfoBox>

          <Row>
            <TextField
              variant="outlined"
              type="text"
              label="Sähköpostiosoite"
              fullWidth
              value={this.state.email}
              onChange={o => this.setState({ email: o.target.value })}
            />
          </Row>
          <Row>
            <TextField
              variant="outlined"
              type={this.state.showPassword ? 'text' : 'password'}
              label="Salasana"
              fullWidth
              value={this.state.password}
              onChange={o => this.setState({ password: o.target.value })}
            />
          </Row>
          <Row>
            <TextField
              variant="outlined"
              type={this.state.showPassword ? 'text' : 'password'}
              label="Salasana uudestaan"
              fullWidth
              value={this.state.password}
              onChange={o =>
                this.setState({ password_confirmation: o.target.value })
              }
            />
          </Row>

          <Row>
            <Button
              onClick={this.onClick}
              disabled={this.state.submitting}
              variant="contained"
              color="primary"
              fullWidth
            >
              Luo käyttäjätunnus
            </Button>
          </Row>
        </Form>

        <Row>
          <Link to="/log-in">
            Onko sinulla jo käyttäjätunnus? Kirjaudu sisään
          </Link>
        </Row>
        {this.state.error && (
          <InfoBox>
            <b>Invalid credentials</b>
          </InfoBox>
        )}
      </FormContainer>
    )
  }
}

export default CreateAccountForm
