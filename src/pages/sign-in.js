import React from "react"
import Helmet from "react-helmet"
import Layout from "../templates/Layout"
import { authenticate, loggedIn } from "../services/moocfi"
import { navigate, Link } from "gatsby"
import { TextField, Button } from "@material-ui/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { withTranslation } from "react-i18next"
import styled from "styled-components"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"

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
  static contextType = LoginStateContext

  componentDidMount = () => {
    // This is a workaroud to some really weird login redirect problems
    this.fallbackRedirector = setInterval(() => {
      if (!loggedIn()) {
        return
      }
      setTimeout(() => {
        if (
          window.location.pathname === "/sign-in/" ||
          window.location.pathname === "/sign-in"
        ) {
          window.location = "/"
        }
      }, 2000)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.fallbackRedirector)
  }

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
      await authenticate({
        username: this.state.email,
        password: this.state.password,
      })

      // Give loginstate time to update
      setTimeout(() => {
        try {
          if (typeof window !== "undefined") {
            window.history.go(-1)
            return
          }
          navigate("/")
        } catch (_e) {
          navigate("/")
        }
      }, 100)
    } catch (error) {
      this.setState({ error: true, submitting: false })
      return
    }
  }

  state = {
    email: "",
    password: "",
    submitting: false,
    error: false,
  }

  render() {
    if (this.context.loggedIn && !this.state.submitting) {
      navigate("/")
      return <div>Redirecting....</div>
    }
    return (
      <Layout>
        <Container>
          <Helmet title={this.props.t("common:login")} />
          <FormContainer>
            <h1>{this.props.t("common:login")}</h1>
            <Form>
              <InfoBox>
                {this.props.t("user:courseUses")}{" "}
                <OutboundLink
                  href="https://mooc.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mooc.fi
                </OutboundLink>{" "}
                {this.props.t("user:courseUses2")}
              </InfoBox>

              <Row>
                <TextField
                  id="outlined-adornment-password"
                  variant="outlined"
                  type="text"
                  label={this.props.t("user:emailUsername")}
                  fullWidth
                  value={this.state.email}
                  onChange={o => this.setState({ email: o.target.value })}
                />
              </Row>
              <Row>
                <TextField
                  id="outlined-adornment-password"
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  label={this.props.t("user:password")}
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
                  type="submit"
                >
                  {this.props.t("common:login")}
                </Button>
              </Row>
            </Form>
            {this.state.error && (
              <InfoBox>
                <b>{this.props.t("user:wrongDetails")}</b>
              </InfoBox>
            )}
            <Row>
              <Link to="/sign-up">{this.props.t("user:createAccount")}</Link>
            </Row>
            <Row>
              <OutboundLink
                href="https://tmc.mooc.fi/password_reset_keys/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.t("user:forgottenPW")}
              </OutboundLink>
            </Row>
          </FormContainer>
        </Container>
      </Layout>
    )
  }
}

export default withTranslation(["common", "user"])(
  withLoginStateContext(SignInPage),
)
