import React from 'react'
import styled from 'styled-components'
import LoginControls from './LoginControls';
import withSimpleErrorBoundary from '../util/withSimpleErrorBoundary';

const TopBarContainer = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 1200px) {
    justify-content: center;
  }
`

class TopBar extends React.Component {
  render() {
    return <TopBarContainer>
      <LoginControls />
    </TopBarContainer>
  }
}

export default withSimpleErrorBoundary(TopBar)
