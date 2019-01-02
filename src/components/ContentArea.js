import React from "react"
import styled from "styled-components"
import { SIDEBAR_WIDTH } from "./Sidebar"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const ContentAreaContainer = styled.main`
  @media only screen and (min-width: 1200px) {
    margin-left: ${SIDEBAR_WIDTH};
  }
  padding: 0 0.5rem;
  background-color: #fcfcfc;
  margin-bottom: 5rem;
  min-height: 80vh;
  ${props =>
    props.mobileMenuOpen &&
    `
  display: none;
  `}
`

class ContentArea extends React.Component {
  render() {
    return (
      <ContentAreaContainer
        mobileMenuOpen={this.props.mobileMenuOpen}
        className="content-area"
      >
        {this.props.children}
      </ContentAreaContainer>
    )
  }
}

export default withSimpleErrorBoundary(ContentArea)
