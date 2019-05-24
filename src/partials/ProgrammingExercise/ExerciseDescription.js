import React from "react"
import styled from "styled-components"

const ExerciseDescriptionWrapper = styled.div`
  counter-reset: headingCounter;

  h1::before,
  h2::before,
  h3::before,
  h4::before,
  h5::before {
    content: "Osa " counter(headingCounter) ": ";
    counter-increment: headingCounter;
  }
`

const ExerciseDescription = ({ children }) => (
  <ExerciseDescriptionWrapper>
    <div />
    {children}
  </ExerciseDescriptionWrapper>
)

export default ExerciseDescription
