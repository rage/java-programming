import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const FloatImageRightContainer = styled.div``

const FloatImageRight = ({ children }) => {
  return <FloatImageRightContainer>{children}</FloatImageRightContainer>
}

export default withSimpleErrorBoundary(FloatImageRight)
