import React, { Fragment } from 'react'
import styled from 'styled-components'
import PagesInThisSection from '../partials/PagesInThisSection'
import PagesContext from '../contexes/PagesContext'
import { nthIndex } from '../util/strings'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight as icon } from '@fortawesome/free-solid-svg-icons'
import withSimpleErrorBoundary from '../util/withSimpleErrorBoundary'

const CoursePageFooterWrapper = styled.footer`
  background-color: black;
  color: white;
  padding: 3rem;
`

const CoursePageFooterContent = styled.div`
  display: flex;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
`

const StyledLink = styled(Link)`
  background-color: white;
  color: black;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 1rem 0;
  display: inline-block;
  width: 100%;

  &:hover {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 1rem;
  margin-left: 0.5rem;
  color: var(--color);
  font-size: 1.5em;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

class CoursePageFooter extends React.Component {
  render() {
    return (
      <PagesContext.Consumer>
        {value => {
          const currentPath = value.current.path
          let sectionPath = currentPath
          const sectionSeparator = nthIndex(currentPath, '/', 2)
          if (sectionSeparator !== -1) {
            sectionPath = currentPath.substr(0, sectionSeparator)
          }
          const sectionPages = value.all
            .filter(o => o.path.startsWith(`${sectionPath}/`))
            .sort((a, b) => {
              a = a.path.toLowerCase()
              b = b.path.toLowerCase()

              return a > b ? 1 : b > a ? -1 : 0
            })

          let currentPageIndex = null

          sectionPages.forEach((page, i) => {
            if (page.path !== currentPath) {
              return
            }
            currentPageIndex = i
          })

          let nextPart = null

          if (
            currentPageIndex !== null &&
            currentPageIndex !== sectionPages.length - 1
          ) {
            nextPart = sectionPages[currentPageIndex + 1]
          }
          return (
            <CoursePageFooterWrapper>
              <CoursePageFooterContent>
                <PagesInThisSection
                  style={{ width: '400px', fontSize: '0.8rem', margin: 0 }}
                />
              </CoursePageFooterContent>
            </CoursePageFooterWrapper>
          )
        }}
      </PagesContext.Consumer>
    )
  }
}

export default withSimpleErrorBoundary(CoursePageFooter)
