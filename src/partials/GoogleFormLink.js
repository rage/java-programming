import React, { useContext } from "react"
import LoginStateContext from "../contexes/LoginStateContext"
import styled from "styled-components"
import { Card } from "@material-ui/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { withTranslation } from "react-i18next"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { useAsync } from "react-use"
import { getCachedUserDetails } from "../services/moocfi"

const Wrapper = styled(Card)`
  margin-bottom: 2rem;
  padding: 1rem;
`

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const P = styled.p`
  margin-bottom: 1rem !important;
`

const GoogleFormLink = ({ children, href, t, emailfieldname }) => {
  const { loggedIn } = useContext(LoginStateContext)
  const userDetails = useAsync(getCachedUserDetails)

  if (!loggedIn) {
    return (
      <Wrapper>
        <MessageWrapper>
          <div>
            <P>{t("loginToSee")}</P>
          </div>
        </MessageWrapper>
      </Wrapper>
    )
  }

  if (userDetails.loading) {
    return <div>Loading...</div>
  }

  if (userDetails.error) {
    return <div>Error while loading user information.</div>
  }

  const email = userDetails.value.email

  let link = href
  if (emailfieldname) {
    link = `${link}&${encodeURIComponent(emailfieldname)}=${encodeURIComponent(
      email,
    )}`
  }
  return (
    <OutboundLink href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </OutboundLink>
  )
}

export default withTranslation("common")(
  withSimpleErrorBoundary(GoogleFormLink),
)
