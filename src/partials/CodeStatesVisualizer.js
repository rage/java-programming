import React from 'react'
import CodeStatesVisualizer from 'code-states-visualizer'
import 'code-states-visualizer/dist/app.css'

export default class CodeStatesVisualizerWrapper extends React.Component {
  render() {
    const { input } = this.props
    return <CodeStatesVisualizer input={input} />
  }
}
