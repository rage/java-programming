import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { withTranslation } from "react-i18next"

const accentColor = "#CCC"

const Wrapper = styled.div`
  padding 1rem;
  padding-top: 0.2rem;
  margin-bottom: 2rem;
  border-left: 0.2rem solid ${accentColor};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`

const Body = styled.div`
  padding-bottom: 0.5rem;
  font-family: monospace;
  white-space: pre-wrap;

  p:last-of-type {
    margin-bottom: 0;
  }

  em,
  strong {
    color: red;
    font-weight: normal;
  }
`

const Note = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.75rem;
`

const SampleData = (props) => {
  return (
    <Wrapper>
      <Note>{props.t("sampleData")}</Note>
      <Body>{props.children}</Body>
    </Wrapper>
  )
}

export default withTranslation("common")(withSimpleErrorBoundary(SampleData))
