import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"

const quizWrapper = styled.div`
  code {
    color: black !important;
  }
`

class Quiznator extends React.Component {
  componentDidMount() {
    const { id } = this.props
    if (!id || typeof window === "undefined") {
      return
    }
    if (!window.loadQuiz) {
      return
    }
    window.loadQuiz(document.getElementById(`unloaded-quiz-${id}`))
  }

  render() {
    const { id } = this.props
    if (!id) {
      return <div>There should be quiz here but no quiz id is specified.</div>
    }
    return (
      <quizWrapper id={normalizeExerciseId(`quiz-${id}`)}>
        <div
          id={`unloaded-quiz-${id}`}
          className="quiz-plugin"
          data-quiz-id={id}
        />
      </quizWrapper>
    )
  }
}

export default withSimpleErrorBoundary(Quiznator)
