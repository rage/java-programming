import React from "react"
import styled from "styled-components"
import PagesInThisSection from "../partials/PagesInThisSection"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const CoursePageFooterWrapper = styled.footer`
  background-color: white;
  color: black;
  padding: 3rem;
`

const CoursePageFooterContent = styled.div`
  display: flex;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
`

class CoursePageFooter extends React.Component {
  render() {
    return (
      <CoursePageFooterWrapper>
        <CoursePageFooterContent>
          <PagesInThisSection
            style={{ width: "400px", fontSize: "0.8rem", margin: 0 }}
          />
        </CoursePageFooterContent>
      </CoursePageFooterWrapper>
    )
  }
}

export default withSimpleErrorBoundary(CoursePageFooter)
