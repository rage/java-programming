import React, { lazy, Suspense } from "react"

import "code-states-visualizer/dist/app.css"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
const CodeStatesVisualizer = lazy(() => import("code-states-visualizer"))

class CodeStatesVisualizerWrapper extends React.Component {
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
    const { input } = this.props
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <CodeStatesVisualizer input={input} />
      </Suspense>
    )
  }
}

export default withSimpleErrorBoundary(CodeStatesVisualizerWrapper)
