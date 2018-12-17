import React, { lazy } from 'react'

import 'code-states-visualizer/dist/app.css'
const CodeStatesVisualizer = lazy(() => import('code-states-visualizer'))

export default class CodeStatesVisualizerWrapper extends React.Component {
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
    return <CodeStatesVisualizer input={input} />
  }
}
