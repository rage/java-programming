import React, { Fragment } from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import { authenticate } from '../services/moocfi'
import { navigate, Link } from 'gatsby'
import { loggedIn } from '../services/moocfi'
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

class SignInPage extends React.Component {
  onClick = async e => {
    e.preventDefault()
    if (
      this.state.submitting ||
      (this.state.email.length === 0 && this.state.password.length === 0)
    ) {
      return
    }
    this.setState({
      submitting: true,
      error: false,
    })
    try {
      const result = await authenticate({
        username: this.state.email,
        password: this.state.password,
      })
      console.log(`Authenticated, ${JSON.stringify(result)}`)
      navigate('/')
    } catch (error) {
      this.setState({ error: true, submitting: false })
      return
    }
  }

  state = {
    email: undefined,
    password: undefined,
    submitting: false,
    error: false,
  }

  render() {
    if (loggedIn()) {
      navigate('/')
      return <div>Redirecting....</div>
    }
    return (
      <Fragment>
        <Sidebar />
        <ContentArea>
          <Layout>
            <FormContainer>
              <h1>Kirjaudu sisään</h1>
              <Form>
                <InfoBox>
                  Tämä kurssi käyttää{' '}
                  <a
                    href="https://mooc.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mooc.fi
                  </a>{' '}
                  käyttäjätunnuksia. Jos olet aikaisemmin tehnyt mooc.fi
                  -kursseja voit käyttää olemassaolevia tunnuksiasi.
                </InfoBox>

                <Row>
                  <TextField
                    id="outlined-adornment-password"
                    variant="outlined"
                    type="text"
                    label="Sähköpostiosoite tai käyttäjänimi"
                    fullWidth
                    value={this.state.email}
                    onChange={o => this.setState({ email: o.target.value })}
                  />
                </Row>
                <Row>
                  <TextField
                    id="outlined-adornment-password"
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Salasana"
                    fullWidth
                    value={this.state.password}
                    onChange={o => this.setState({ password: o.target.value })}
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
                    Kirjaudu sisään
                  </Button>
                </Row>
              </Form>
              {this.state.error && (
                <InfoBox>
                  <b>Invalid credentials</b>
                </InfoBox>
              )}
              <Row>
                <Link to="/sign-up">Luo uusi tunnus</Link>
              </Row>
              <Row>
                <a
                  href="https://tmc.mooc.fi/password_reset_keys/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unohdin salasanani
                </a>
              </Row>
            </FormContainer>
          </Layout>
        </ContentArea>
      </Fragment>
    )
  }
}

export default SignInPage
