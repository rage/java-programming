import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 0.3rem 0.5rem;
  margin: 1rem 0.5rem;
  border-radius: 0.4rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  :hover {
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
`

export default ({ children, to, onClick, disabled }) => (
  <StyledLink onClick={onClick} to={to === undefined ? false : to} disabled={disabled}>
    {children}
  </StyledLink>
)
