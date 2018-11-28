import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'

import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import Partials from '../partials'
import PagesContext from '../contexes/PagesContext'

const ContentWrapper = styled.div`
  margin-top: 1rem;
`

export default function CourseContentTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, htmlAst } = data.page
  const allPages = data.allPages.edges.map(o => o.node?.frontmatter)
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: Partials,
  }).Compiler
  return (
    <PagesContext.Provider value={{
      all: allPages,
      current: frontmatter
    }}>
      <Fragment>
        <Sidebar />
        <ContentArea>
          <Layout>
            <ContentWrapper>
              <h1>{frontmatter.title}</h1>
              {renderAst(htmlAst)}
            </ContentWrapper>
          </Layout>
        </ContentArea>
      </Fragment>
    </PagesContext.Provider>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
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
