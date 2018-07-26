import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components'
import "typeface-open-sans-condensed"

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
  margin-bottom: 0;
`

const LogoTypography = styled.div`
  flex: 1;
  font-family: 'Open Sans Condensed', sans-serif !important;
  font-size: 1.75rem !important;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 64px;
  background-color: white;
`

export default () => (
  <StyledLink href="https://mooc.fi">
    <LogoImg src={logo} />
    <LogoTypography variant="title" color="inherit">
      MOOC.fi
    </LogoTypography>
  </StyledLink>
)
