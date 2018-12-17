import React from 'react'
import styled from 'styled-components'
import { SIDEBAR_WIDTH } from './Sidebar'
import withSimpleErrorBoundary from '../util/withSimpleErrorBoundary'

const ContentAreaContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    margin-left: ${SIDEBAR_WIDTH};
  }
  padding: 0 0.5rem;
  margin-bottom: 3rem;
`

class ContentArea extends React.Component {
  render() {
    return (
      <ContentAreaContainer className="content-area">
        {this.props.children}
      </ContentAreaContainer>
    )
  }
}

export default withSimpleErrorBoundary(ContentArea)
