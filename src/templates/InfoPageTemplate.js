import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { Helmet } from "react-helmet"

import Layout from "./Layout"

import getNamedPartials from "../partials"

import "./remark.css"
import { LoginStateContextProvider } from "../contexes/LoginStateContext"
import Container from "../components/Container"
import Banner from "../components/Banner"

const ContentWrapper = styled.article``

export default class InfoPageTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter, htmlAst } = data.page
    const partials = getNamedPartials()
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: partials,
    }).Compiler

    return (
      <Fragment>
        <Helmet title={frontmatter.title} />
        <LoginStateContextProvider>
          <Layout>
            <Fragment>
              {frontmatter.banner && <Banner />}
              <Container>
                <ContentWrapper>
                  <h1>{frontmatter.title}</h1>
                  {renderAst(htmlAst)}
                </ContentWrapper>
              </Container>
            </Fragment>
          </Layout>
        </LoginStateContextProvider>
      </Fragment>
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
        banner
      }
    }
  }
`
