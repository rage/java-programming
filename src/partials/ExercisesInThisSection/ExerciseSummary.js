import React from 'react'
import withSimpleErrorBoundary from '../../util/withSimpleErrorBoundary'
import styled from 'styled-components'

const ExerciseSummaryWrapper = styled.div`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
`

const ExerciseSummary = ({ exercise, index, quizIdToTitle }) => {
  let description = 'Tuntematon tehtävätyyppi'
  if (exercise.type === 'quiznator') {
    const name = quizIdToTitle[exercise.id]
    if (name) {
      description = `Kysely: ${name}`
    } else {
      description = "Kysely"
    }
  }
  if (exercise.type === 'programming-exercise') {
    description = `Ohjelmointitehtävä: ${exercise.id}`
  }
  return (
    <ExerciseSummaryWrapper>
      {index + 1}. {description}
    </ExerciseSummaryWrapper>
  )
}

export default withSimpleErrorBoundary(ExerciseSummary)
