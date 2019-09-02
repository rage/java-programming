import React from "react"
import styled from "styled-components"
import LoginStateContext from "../contexes/LoginStateContext"
import LoginControls from "../components/LoginControls"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"
import Quiz from "moocfi-quizzes"
import { Paper } from "@material-ui/core"
import { accessToken } from "../services/moocfi"

const StyledPaper = styled(Paper)`
  overflow: hidden;
  margin: 2rem 0 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 40px -12px !important;
  border-radius: 1rem !important;
`

class QuizPartial extends React.Component {
  static contextType = LoginStateContext

  render() {
    if (!this.context.loggedIn) {
      const loginPrompt = (
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <p>Kirjaudu sisään nähdäksesi tehtävän.</p>
          <LoginControls />
        </div>
      )

      return (
        <StyledPaper id={normalizeExerciseId(`quiz-${id}`)}>
          <Quiz
            id={id}
            languageId="fi_FI"
            backendAddress="https://quizzes.mooc.fi"
            customContent={loginPrompt}
          />
        </StyledPaper>
      )
    }

    const { id } = this.props
    if (!id) {
      return <div>There should be quiz here but no quiz id is specified.</div>
    }
    return (
      <StyledPaper id={normalizeExerciseId(`quiz-${id}`)}>
        <Quiz
          id={id}
          languageId="fi_FI"
          accessToken={accessToken()}
          backendAddress="https://quizzes.mooc.fi"
        />
      </StyledPaper>
    )
  }
}

export default withSimpleErrorBoundary(QuizPartial)
