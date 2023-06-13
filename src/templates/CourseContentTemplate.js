import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { navigate, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "./Layout"

import getNamedPartials from "../partials"
import CoursePageFooter from "../components/CoursePageFooter"
import { getCachedUserDetails } from "../services/moocfi"
import "./remark.css"
import PagesContext from "../contexes/PagesContext"
import LoginStateContext, {
  LoginStateContextProvider,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"

import { loggedIn } from "../services/moocfi"
import { capitalizeFirstLetter } from "../util/strings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleUp as icon } from "@fortawesome/free-solid-svg-icons"
import EndOfSubSection from "../components/EndOfSubSection"
import { tryToScrollToSelector } from "../util/dom"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
  font-size: 1em;
`

const ContentWrapper = styled.article``

const UpLink = styled(Link)`
  color: #332c2cb3 !important;
  font-weight: bold;
  margin-bottom: 1rem !important;
  display: block;

  :hover {
    text-decoration: none;
    color: #805050b3 !important;
  }
`

export default class CourseContentTemplate extends React.Component {
  static contextType = LoginStateContext

  async componentDidMount() {
    if (!loggedIn()) {
      return
    }

    let userInfo = await getCachedUserDetails()
    const research = userInfo?.extra_fields?.research
    if (research === undefined) {
      navigate("/missing-info")
    }
    if (typeof window !== "undefined" && window.location.hash) {
      const selector = window.location.hash
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 100)
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 500)
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 1000)
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 2000)
    }
  }

  render() {
    const { data } = this.props
    const { frontmatter, htmlAst } = data.page
    const allPages = data.allPages.edges.map((o) => o.node?.frontmatter)
    const partials = getNamedPartials()
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: partials,
    }).Compiler

    const parentSectionName = capitalizeFirstLetter(
      `${frontmatter.path.split(/\//g)[1].replace(/-/g, " ")}`,
    )
    const parentSectionPath = `/${frontmatter.path.split(/\//g)[1]}`
    return (
      <Fragment>
        <Helmet title={frontmatter.title} />
        <PagesContext.Provider value={{ all: allPages, current: frontmatter }}>
          <LoginStateContextProvider>
            <Layout>
              <Fragment>
                <Container>
                  <ContentWrapper>
                    <UpLink to={parentSectionPath}>
                      <StyledIcon icon={icon} />
                      {parentSectionName}
                    </UpLink>
                    <h1>{frontmatter.title}</h1>
                    {renderAst(htmlAst)}
                    <EndOfSubSection />
                  </ContentWrapper>
                </Container>
                <CoursePageFooter />
              </Fragment>
            </Layout>
          </LoginStateContextProvider>
        </PagesContext.Provider>
      </Fragment>
    )
  }
}

export const pageQuery = graphql`
  query ($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      html
      frontmatter {
        path
        title
      }
    }
    allPages: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
