import React from 'react'
import styled from 'styled-components'
import { SIDEBAR_WIDTH } from './Sidebar'

const ContentAreaContainer = styled.div`
  @media only screen and (min-width: 500px) {
    margin-left: ${SIDEBAR_WIDTH};
  }
`

export default class ContentArea extends React.Component {
  render() {
    return <ContentAreaContainer>{this.props.children}</ContentAreaContainer>
  }
}
