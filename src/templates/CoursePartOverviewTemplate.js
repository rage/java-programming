import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { navigate } from "gatsby"
import { Helmet } from "react-helmet"
import { get } from "lodash"

import Layout from "./Layout"

import getNamedPartials from "../partials"
import { getCachedUserDetails } from "../services/moocfi"
import "./remark.css"
import PagesContext from "../contexes/PagesContext"
import LoginStateContext, {
  LoginStateContextProvider,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"

import { loggedIn } from "../services/moocfi"
import { NoSsr } from "@material-ui/core"

const ContentWrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 2rem;

  p {
    margin-bottom: 2rem;
  }
`

const Title = styled.h1``

const Titled = ({ level, children }) => {
  if (level === 1) {
    return <h1>{children}</h1>
  }
  if (level === 2) {
    return <h4>{children}</h4>
  }
  if (level === 3) {
    return <h5>{children}</h5>
  }
  if (level === 4) {
    return <h6>{children}</h6>
  }
}

export default class CoursePartOverviewTemplate extends React.Component {
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
  }

  render() {
    const { data } = this.props
    const { frontmatter, htmlAst } = data.page
    const allPages = data.allPages.edges.map(o => {
      const res = o.node?.frontmatter
      res.exercises = o.node?.moocfiExercises
      return res
    })
    const partials = getNamedPartials()
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: partials,
    }).Compiler
    return (
      <PagesContext.Provider
        value={{
          all: allPages,
          current: frontmatter,
        }}
      >
        <Helmet title={frontmatter.title} />
        <LoginStateContextProvider>
          <Layout>
            <Fragment>
              <Container>
                <ContentWrapper>
                  <Title>{frontmatter.title}</Title>
                  {renderAst(htmlAst)}
                  <NoSsr>
                    <h1>Otsikot</h1>
                    <div>
                      {data.allPages.edges
                        .filter(page =>
                          page.node.frontmatter.path.startsWith(
                            (get(global, "document.location.pathname") || "") +
                              "/",
                          ),
                        )
                        .sort((a, b) => {
                          a = a.node.frontmatter.path.toLowerCase()
                          b = b.node.frontmatter.path.toLowerCase()

                          return a > b ? 1 : b > a ? -1 : 0
                        })
                        .map((page, i) => (
                          <div>
                            <h2>
                              {i}: {page.node.frontmatter.title}
                            </h2>
                            {page.node.headings.map(heading => {
                              return (
                                <Titled level={heading.depth}>
                                  {heading.value} ({heading.depth})
                                </Titled>
                              )
                            })}
                          </div>
                        ))}
                    </div>
                  </NoSsr>
                </ContentWrapper>
              </Container>
            </Fragment>
          </Layout>
        </LoginStateContextProvider>
      </PagesContext.Provider>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!) {
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
          moocfiExercises {
            id
            type
            parentPagePath
          }
          headings {
            value
            depth
          }
        }
      }
    }
  }
`
