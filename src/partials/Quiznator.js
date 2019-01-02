import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"

const QuiznatorWrapper = styled.div`
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
    window.loadQuiz(document.getElementById(`unloaded-quiznator-${id}`))
  }

  render() {
    const { id } = this.props
    if (!id) {
      return <div>There should be quiz here but no quiz id is specified.</div>
    }
    return (
      <QuiznatorWrapper id={normalizeExerciseId(`quiznator-${id}`)}>
        <div
          id={`unloaded-quiznator-${id}`}
          className="quiznator-plugin"
          data-quiz-id={id}
        />
      </QuiznatorWrapper>
    )
  }
}

export default withSimpleErrorBoundary(Quiznator)
