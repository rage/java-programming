import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import rehypeReact from 'rehype-react'

import Layout from '../templates/layout'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import getNamedPartials from '../partials'
import PagesContext from '../contexes/PagesContext'
import TopBar from '../components/TopBar'
import CoursePageFooter from '../components/CoursePageFooter'
import './remark.css'

const ContentWrapper = styled.div`
  margin-top: 1rem;
`

const SectionIndicator = styled.h2``

export default function CourseContentTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, htmlAst } = data.page
  const allPages = data.allPages.edges.map(o => o.node?.frontmatter)
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
      <Fragment>
        <Sidebar />
        <TopBar />
        <ContentArea>
          <Layout>
            <ContentWrapper>
              <SectionIndicator>Osa x.y</SectionIndicator>
              <h1>{frontmatter.title}</h1>
              {renderAst(htmlAst)}

            </ContentWrapper>
          </Layout>
          <CoursePageFooter />
        </ContentArea>
      </Fragment>
    </PagesContext.Provider>
  )
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
        }
      }
    }
  }
`
