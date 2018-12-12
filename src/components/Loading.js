import React, { Fragment } from 'react'
import styled from 'styled-components'

import { CircularProgress } from '@material-ui/core'

const LoadingWrapper = styled.div`
  padding: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ${props => props.heightHint && `
    height: ${props.heightHint};
  `}
`

export default ({ children, loading, heightHint }) => {
  if (loading) {
    return (
      <LoadingWrapper heightHint={heightHint}>
        <CircularProgress />
      </LoadingWrapper>
    )
  }

  return <Fragment>{children}</Fragment>
}
