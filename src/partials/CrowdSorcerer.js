import React, { lazy, Suspense } from "react"

import "crowdsorcerer/dist/app.css"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
const CrowdSorcerer = lazy(() => import("crowdsorcerer"))

class CrowdSorcererWrapper extends React.Component {
  state = {
    render: false,
  }

  componentDidMount() {
    this.setState({ render: true })
  }

  render() {
    if (!this.state.render) {
      return <div>Loading...</div>
    }
    const assignmentId = this.props.id
    const exercises = this.props.exercisecount
    const review = this.props.peerreview

    return (
      <div id={`crowdsorcerer-${assignmentId}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <CrowdSorcerer
            assignmentId={assignmentId}
            exercises={exercises}
            review={review}
          />
        </Suspense>
      </div>
    )
  }
}

export default withSimpleErrorBoundary(CrowdSorcererWrapper)
