import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock as icon } from '@fortawesome/free-solid-svg-icons'

const Deadline = styled.div`
  margin-bottom: 1rem;
  color: #6c757d;
  font-size: 0.9rem;
  font-weight: bold;
`

const StyledIcon = styled(FontAwesomeIcon)`
  //vertical-align: middle;
  margin-right: 0.25em;
  font-size: 1em;
`

export default ({ children }) => {
  return (
    <Deadline>
      <StyledIcon icon={icon} />
      Deadline: {children}
    </Deadline>
  )
}
