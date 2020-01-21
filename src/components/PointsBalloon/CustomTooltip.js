import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"
import { SMALL_MEDIUM_BREAKPOINT } from "../../util/constants"
import { withTranslation } from "react-i18next"

const StyledTooltip = styled.div`
  background: white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  p {
    margin-bottom: 0 !important;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    p {
      font-size: 0.75rem;
    }
  }
`

const CustomTooltip = props => {
  if (!props.active) {
    return null
  }

  return (
    <StyledTooltip>
      <p>
        {props.t("gotPoints")}: {props.payload[0].payload.n_points}
      </p>
      <p>
        {props.t("maxPoints")}: {props.payload[0].payload.max_points}
      </p>
    </StyledTooltip>
  )
}

export default withTranslation("points-balloon")(
  withSimpleErrorBoundary(CustomTooltip),
)
