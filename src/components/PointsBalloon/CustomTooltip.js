import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"

const StyledTooltip = styled.div`
  background: white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  p {
    margin-bottom: 0 !important;
    font-size: 0.9rem;
  }
`

const CustomTooltip = props => {
  if (!props.active) {
    return null
  }
  return (
    <StyledTooltip>
      <p>Saadut pisteet: {props.payload[0].payload.n_points}</p>
      <p>Maksimipisteet: {props.payload[0].payload.max_points}</p>
    </StyledTooltip>
  )
}

export default withSimpleErrorBoundary(CustomTooltip)
