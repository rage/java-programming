import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import { Button } from "@material-ui/core"
import CourseSettings from "../../course-settings"

import Logo from "./Logo"
import TreeView from "./TreeView"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import {
  MEDIUM_LARGE_BREAKPOINT,
  SMALL_MEDIUM_BREAKPOINT,
  MEDIUM_SIDEBAR_WIDTH,
  LARGE_SIDEBAR_WIDTH,
} from "../util/constants"

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 0.5em;
  margin-left: 0.1em;
  color: var(--color);
  font-size: 1.5em;
`

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  ${props =>
    !props.mobileMenuOpen &&
    `
      display: none;
    `}

  @media only screen and (min-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    height: 100%;
    width: ${LARGE_SIDEBAR_WIDTH};
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
  @media only screen and (max-width: ${MEDIUM_LARGE_BREAKPOINT}) {
    width: ${MEDIUM_SIDEBAR_WIDTH};
    font-size: 0.85rem;
  }
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    width: 90%;
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

const TreeViewContainer = styled.nav`
  flex: 1;
  margin-bottom: 1em;
`

const Brand = styled.div`
  width: 100%;
  text-align: center;
  padding: 1em;
  padding-top: 2em;
  font-weight: bold;
  color: #c0392b;
  font-size: 1.15em;
`

const MenuExpanderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  @media only screen and (min-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    display: none;
  }
`

var content2 = CourseSettings.default.sidebarEntries

var futurePages = CourseSettings.default.sidebarFuturePages

const MobileWrapper = styled.div`
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
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
  render() {
    let edges =
      this.props.data?.allMarkdownRemark?.edges.map(o => o.node?.frontmatter) ||
      []
    if (process.env.NODE_ENV === "production") {
      edges = edges.filter(o => !o.hidden)
    }
    edges = edges.filter(o => !o.information_page)
    edges.sort((a, b) =>
      a.title.localeCompare(b.title, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    let content = content2.concat(edges)
    content = content.concat(futurePages)
    if (CourseSettings.default.splitCourses) {
      let middlepoint = content.findIndex(o => o.title === "Osa 7")
      content.splice(middlepoint + 1, 0, {
        separator: true,
        title: "Ohjelmoinnin jatkokurssi",
      })
    }

    return (
      <MobileWrapperOrFragment mobileMenuOpen={this.props.mobileMenuOpen}>
        <MenuExpanderWrapper>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.props.toggleMobileMenu}
          >
            {this.props.mobileMenuOpen ? (
              <span>
                <StyledIcon icon={faTimes} />
                Sulje valikko
              </span>
            ) : (
              <span>
                <StyledIcon icon={faBars} />
                Avaa valikko
              </span>
            )}
          </Button>
        </MenuExpanderWrapper>
        <SidebarContainer mobileMenuOpen={this.props.mobileMenuOpen}>
          <Brand>{CourseSettings.default.name}</Brand>
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
            information_page
            path
            hidden
          }
        }
      }
    }
  }
`

const SidebarWithData = props => (
  <StaticQuery
    query={query}
    render={data => <Sidebar data={data} {...props} />}
  />
)

export default withSimpleErrorBoundary(SidebarWithData)
