import React, { Fragment } from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { Button } from '@material-ui/core'

import Logo from './Logo'
import TreeView from './TreeView'

export const SIDEBAR_WIDTH = '20rem'

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  ${props =>
    !props.mobileMenuOpen &&
    `
      display: none;
    `}

  @media only screen and (min-width: 1200px) {
    height: 100vh;
    width: ${SIDEBAR_WIDTH};
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 100;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    overflow-y: scroll;
    display: flex;
  }
  @media only screen and (max-width: 1200px) {
    max-width: 500px;
    margin: 0 auto;
  }
`
const LogoContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`

const TreeViewContainer = styled.div`
  flex: 1;
`

const Brand = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  padding-top: 2rem;
  font-weight: bold;
  color: #c0392b;
  font-size: 1.3rem;
`

const MenuExpanderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  margin-bottom: 0;
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`

var content2 = [
  {
    title: 'Tietoa kurssista',
    path: '/',
  },
  {
    title: 'Mahdollisuus opinto-oikeuteen',
    path: '/opinto-oikeus',
  },
  {
    title: 'Opettajille ja opinto-ohjaajille',
    path: '/opettajille',
  },
]

var futurePages = [
  { title: 'Osa 2', tba: '28.12.2018' },
  { title: 'Osa 3', tba: '11.1.2019' },
  { title: 'Osa 4', tba: '25.1.2019' },
  { title: 'Osa 5', tba: '1.2.2019' },
  { title: 'Osa 8', tba: '8.2.2019' },
  { title: 'Osa 9', tba: '8.3.2019' },
  { title: 'Osa 10', tba: '15.3.2019' },
  { title: 'Osa 11', tba: '22.3.2019' },
  { title: 'Osa 12', tba: '29.3.2019' },
  { title: 'Osa 13', tba: '12.4.2019' },
  { title: 'Osa 14', tba: '19.4.2019' },
]

const MobileWrapper = styled.div`
  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    overflow-y: scroll;
    background-color: white;
  }
`

const MobileWrapperOrFragment = props => {
  if (props.mobileMenuOpen) {
    return <MobileWrapper {...props} />
  }
  return <div {...props} />
}

class Sidebar extends React.Component {
  state = {
    mobileMenuOpen: false,
  }

  toggleMobileMenu = () => {
    this.setState(prev => {
      return {
        mobileMenuOpen: !prev.mobileMenuOpen,
      }
    })
  }

  render() {
    const edges =
      this.props.data?.allMarkdownRemark?.edges.map(o => o.node?.frontmatter) ||
      []
    let content = content2.concat(edges)
    content = content.concat(futurePages)
    return (
      <MobileWrapperOrFragment mobileMenuOpen={this.state.mobileMenuOpen}>
        <MenuExpanderWrapper>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.toggleMobileMenu}
          >
            {this.state.mobileMenuOpen ? 'Sulje valikko' : 'Vaihda sivua'}
          </Button>
        </MenuExpanderWrapper>
        <SidebarContainer mobileMenuOpen={this.state.mobileMenuOpen}>
          <Brand>Ohjelmoinnin MOOC 2019</Brand>
          <TreeViewContainer>
            <TreeView data={content} />
          </TreeViewContainer>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </SidebarContainer>
      </MobileWrapperOrFragment>
    )
  }
}

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/index.md/" } }
      sort: { fields: [frontmatter___path] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Sidebar data={data} {...props} />}
  />
)
