import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"
import { normalizeExerciseId } from "../../util/strings"
import { Link } from "gatsby"

const ExerciseSummaryWrapper = styled(Link)`
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  display: block;
`

const ExerciseSummary = ({ exercise, index, quizIdToTitle }) => {
  let description = "Tuntematon tehtävätyyppi"
  if (exercise.type === "quiz") {
    const name = quizIdToTitle[exercise.id]
    if (name) {
      description = `Kysely: ${name}`
    } else {
      description = "Kysely"
    }
  }
  if (exercise.type === "programming-exercise") {
    description = `Ohjelmointitehtävä: ${exercise.id}`
  }
  if (exercise.type === "crowdsorcerer") {
    description = "Crowdsorcerer"
  }
  let anchorLinkDigest = normalizeExerciseId(`${exercise.type}-${exercise.id}`)
  return (
    <ExerciseSummaryWrapper
      to={`${exercise.parentPagePath}#${anchorLinkDigest}`}
    >
      {index + 1}. {description}
    </ExerciseSummaryWrapper>
  )
}

export default withSimpleErrorBoundary(ExerciseSummary)
