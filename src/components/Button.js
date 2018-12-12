import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledLink = styled(Link)`
  margin: 1rem 0.5rem;
`

export default ({ children, to, onClick, disabled, variant = 'outlined' }) => (
  <StyledLink
    onClick={onClick}
    to={to === undefined ? false : to}
    disabled={disabled}
  >
    <Button variant={variant}>{children}</Button>
  </StyledLink>
)
