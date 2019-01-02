import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button as MaterialButton } from "@material-ui/core"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const StyledLink = styled(Link)`
  margin: 1rem 0.5rem;
`

const Button = ({ children, to, onClick, disabled, variant = "outlined" }) => (
  <StyledLink
    onClick={onClick}
    to={to === undefined ? false : to}
    disabled={disabled}
  >
    <MaterialButton variant={variant}>{children}</MaterialButton>
  </StyledLink>
)

export default withSimpleErrorBoundary(Button)
