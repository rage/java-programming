import React from 'react'
import styled from 'styled-components'

import { CircularProgress } from '@material-ui/core'

const LoadingWrapper = styled.div`
  padding: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export default () => (
  <LoadingWrapper>
    <CircularProgress />
  </LoadingWrapper>
)
