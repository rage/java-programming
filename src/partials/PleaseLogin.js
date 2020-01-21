import React from "react"
import { Card, CardContent } from "@material-ui/core"
import styled from "styled-components"
import LoginControls from "../components/LoginControls"
import LoginStateContext from "../contexes/LoginStateContext"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { withTranslation } from "react-i18next"
const PleaseLoginWrapper = styled(Card)`
  margin-bottom: 2rem;
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
`
class PleaseLogin extends React.Component {
  static contextType = LoginStateContext

  render() {
    if (this.context.loggedIn) {
      return <div />
    }
    return (
      <PleaseLoginWrapper>
        <CardContent>
          <Wrapper>{this.props.t("pleaseLogin")}</Wrapper>
          <div>
            <LoginControls />
          </div>
        </CardContent>
      </PleaseLoginWrapper>
    )
  }
}

export default withTranslation("common")(withSimpleErrorBoundary(PleaseLogin))
