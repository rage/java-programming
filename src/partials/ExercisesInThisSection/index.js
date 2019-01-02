import React from "react"
import PagesContext from "../../contexes/PagesContext"
import { nthIndex } from "../../util/strings"
import styled from "styled-components"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown as icon } from "@fortawesome/free-solid-svg-icons"

import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import ExerciseSummary from "./ExerciseSummary"
import { fetchManyQuizDetails } from "../../services/quiznator"
import { flatten } from "../../util/arrays"

const Title = styled.div`
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.87);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0em;
`

class ExercisesInThisSection extends React.Component {
  static contextType = PagesContext

  state = {
    sectionPages: null,
    quizIdToTitle: null,
  }

  async componentDidMount() {
    const value = this.context
    const currentPath = value.current.path
    let sectionPath = currentPath
    const sectionSeparator = nthIndex(currentPath, "/", 2)
    if (sectionSeparator !== -1) {
      sectionPath = currentPath.substr(0, sectionSeparator)
    }

    const sectionPages = value.all
      .filter(o => o.path.startsWith(`${sectionPath}/`))
      .sort((a, b) => {
        a = a.path.toLowerCase()
        b = b.path.toLowerCase()

        return a > b ? 1 : b > a ? -1 : 0
      })

    const allExercises = flatten(sectionPages.map(page => page.exercises))
    const quizIds = allExercises
      .filter(o => o.type === "quiznator")
      .map(o => o.id)
    const quizDetails = await fetchManyQuizDetails(quizIds)
    const quizIdToTitle = {}
    quizDetails.forEach(o => {
      quizIdToTitle[o._id] = o.title
    })
    this.setState({ sectionPages, quizIdToTitle })
  }
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<FontAwesomeIcon icon={icon} />}>
          Lista osan tehtävistä
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {this.state.sectionPages &&
              this.state.sectionPages.map((page, i) => (
                <div key={page.title}>
                  <Title>
                    {i + 1}. {page.title}
                  </Title>
                  <div>
                    {page.exercises.map((exercise, i2) => {
                      return (
                        <ExerciseSummary
                          index={i2}
                          exercise={exercise}
                          key={exercise.id}
                          quizIdToTitle={this.state.quizIdToTitle}
                        />
                      )
                    })}
                  </div>
                </div>
              ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withSimpleErrorBoundary(ExercisesInThisSection)
