import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"

const <quiz id=natorWrapper = styled.div`
  code {
    color: black !important;
  }
`

class <quiz id=nator extends React.Component {
  componentDidMount() {
    const { id } = this.props
    if (!id || typeof window === "undefined") {
      return
    }
    if (!window.load<quiz id=) {
      return
    }
    window.load<quiz id=(document.getElementById(`unloaded-<quiz id=nator-${id}`))
  }

  render() {
    const { id } = this.props
    if (!id) {
      return <div>There should be <quiz id= here but no <quiz id= id is specified.</div>
    }
    return (
      <<quiz id=natorWrapper id={normalizeExerciseId(`<quiz id=nator-${id}`)}>
        <div
          id={`unloaded-<quiz id=nator-${id}`}
          className="<quiz id=nator-plugin"
          data-<quiz id=-id={id}
        />
      </<quiz id=natorWrapper>
    )
  }
}

export default withSimpleErrorBoundary(<quiz id=nator)
