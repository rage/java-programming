import React from "react"
import { Link } from "gatsby"
import { withTranslation } from "react-i18next"
import EmailExample from "../../images/email-example.png"

import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"

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
        <h1>{this.props.t("welcomeToCourse")}</h1>
        <InfoBox>
          <p>{this.props.t("emailSent")} </p>

          <p>{this.props.t("emailExample")}</p>

          <StyledImage
            src={EmailExample}
            alt={this.props.t("emaiLExampleAria")}
          />
        </InfoBox>
        <p>
          {this.props.t("nowContinue")}{" "}
          <Link to="/osa-1">{this.props.t("toMaterial")}</Link>.
        </p>
      </FormContainer>
    )
  }
}

export default withTranslation("user")(withSimpleErrorBoundary(ConfirmEmail))
