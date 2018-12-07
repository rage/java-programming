import React from 'react'

export default class Quiznator extends React.Component {
  componentDidMount() {
    const { id } = this.props
    if (!id || typeof window === 'undefined') {
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
      <div
        id={`unloaded-quiznator-${id}`}
        className="quiznator-plugin"
        data-quiz-id={id}
      />
    )
  }
}
