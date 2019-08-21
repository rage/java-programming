import React from "react"
import PagesContext from "../../contexes/PagesContext"
import { nthIndex } from "../../util/strings"
import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import ExerciseSummary from "./ExerciseSummary"
import { fetchMany<quiz id=Details } from "../../services/<quiz id=nator"
import { flatten } from "../../util/arrays"

const Title = styled.div`
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.87);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0em;
`

class ExerciseList extends React.Component {
  static contextType = PagesContext

  state = {
    render: false,
    sectionPages: null,
    <quiz id=IdToTitle: null,
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
    const <quiz id=Ids = allExercises
      .filter(o => o.type === "<quiz id=nator")
      .map(o => o.id)
    const <quiz id=Details = await fetchMany<quiz id=Details(<quiz id=Ids)
    const <quiz id=IdToTitle = {}
    <quiz id=Details.forEach(o => {
      <quiz id=IdToTitle[o._id] = o.title
    })
    this.setState({ sectionPages, <quiz id=IdToTitle, render: true })
  }
  render() {
    if (!this.state.render) {
      return <div>Loading...</div>
    }
    return (
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
                      <quiz id=IdToTitle={this.state.<quiz id=IdToTitle}
                    />
                  )
                })}
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default withSimpleErrorBoundary(ExerciseList)
