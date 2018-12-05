import React from 'react'
import styled from 'styled-components'
import LoginControls from './LoginControls';

const TopBarContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export default class TopBar extends React.Component {
  render() {
    return <TopBarContainer>
      <LoginControls />
    </TopBarContainer>
  }
}
