import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

import TreeView from './TreeView'

export const SIDEBAR_WIDTH = '20rem'

const SidebarContainer = styled.div`
  @media only screen and (min-width: 500px) {
    height: 100vh;
    width: ${SIDEBAR_WIDTH};
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 100;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`

const TopContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`

const content2 = [
  {
    name: 'Tietoa kurssista',
    href: '/',
  },
  {
    name: 'Mahdollisuus opinto-oikeuteen',
    href: '/opinto-oikeus',
  },
  {
    name: 'Opettajille ja opinto-ohjaajille',
    href: '/opettajille',
  },
]

export default class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <TopContainer>
          <Logo />
        </TopContainer>
        <TreeView data={content2} />
      </SidebarContainer>
    )
  }
}
