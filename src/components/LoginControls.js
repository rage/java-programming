import React, { Fragment } from "react"
import Button from "./Button"
import { Button as MaterialButton } from "@material-ui/core"
import { signOut, getCachedUserDetails } from "../services/moocfi"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import { withTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser as profileIcon } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const StyledButton = styled(MaterialButton)`
  margin: 1rem 0.5rem !important;
  padding: 1.1rem 1rem !important;
`

class LoginControls extends React.Component {
  static contextType = LoginStateContext

  doSignOut = e => {
    e.preventDefault()
    signOut()
  }

  async componentDidMount() {
    if (!this.context.loggedIn) {
      return
    }
    const details = await getCachedUserDetails()
    let name = `${details?.user_field?.first_name || ""} ${details?.user_field
      ?.last_name || ""}`.trim()
    if (name === "") {
      name = details.email
    }
    this.setState({
      name,
    })
  }

  state = {
    name: "Loading...",
  }

  render() {
    return this.context.loggedIn ? (
      <Fragment>
        <Button to="/profile">
          <StyledIcon icon={profileIcon} />
          {this.state.name}
        </Button>
        <StyledButton variant="outlined" onClick={this.doSignOut}>
          {this.props.t("logout")}
        </StyledButton>
      </Fragment>
    ) : (
      <Fragment>
        <Button to="/sign-up">{this.props.t("newAccount")}</Button>
        <Button to="/sign-in">{this.props.t("login")}</Button>
      </Fragment>
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(withLoginStateContext(LoginControls)),
)
