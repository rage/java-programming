import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

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
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`

const TopContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-content: center;
  align-items: center;
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

class Sidebar extends React.Component {
  render() {
    const edges =
      this.props.data?.allMarkdownRemark?.edges.map(o => o.node?.frontmatter) || []
    const content = content2.concat(edges)
    return (
      <SidebarContainer>
        <TopContainer>
          <Logo />
        </TopContainer>
        <TreeView data={content} />
      </SidebarContainer>
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
