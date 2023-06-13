import React, { Fragment } from "react"
import styled from "styled-components"

import { CircularProgress } from "@material-ui/core"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const LoadingWrapper = styled.div`
  padding: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ${(props) =>
    props.heightHint &&
    `
    height: ${props.heightHint};
  `}
`

const Loading = ({ children, loading = true, heightHint = "500px" }) => {
  if (loading) {
    return (
      <LoadingWrapper heightHint={heightHint}>
        <CircularProgress />
      </LoadingWrapper>
    )
  }

  return <Fragment>{children}</Fragment>
}

export default withSimpleErrorBoundary(Loading)
