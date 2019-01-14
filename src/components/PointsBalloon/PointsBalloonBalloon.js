import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import Fab from "@material-ui/core/Fab"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine as icon } from "@fortawesome/free-solid-svg-icons"

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 1.5em !important;
`

const StyledFab = styled(Fab)`
  background-color: #00a5ff !important;
`

const PointsBalloonBalloon = ({ onClick }) => (
  <StyledFab onClick={onClick}>
    <StyledIcon icon={icon} />
  </StyledFab>
)

export default withSimpleErrorBoundary(PointsBalloonBalloon)
