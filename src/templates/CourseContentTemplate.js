import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'

const ContentWrapper = styled.div`
  margin-top: 1rem;
`

export default function CourseContentTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Fragment>
      <Sidebar />
      <ContentArea>
        <Layout>
          <ContentWrapper>
            <h1>{frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </ContentWrapper>
        </Layout>
      </ContentArea>
    </Fragment>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
