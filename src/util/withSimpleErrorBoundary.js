import React from "react"

export default function withSimpleErrorBoundary(Component) {
  class SimpleErrorBoundary extends React.Component {
    state = {
      error: null,
    }

    static getDerivedStateFromError(error) {
      return { error: error.toString() }
    }

    componentDidCatch(error, info) {
      console.error(error, info)
    }

    render() {
      if (this.state.error) {
        return (
          <div>
            Ohjelman osa kaatui:
            <pre>{this.state.error}</pre>
          </div>
        )
      }

      return <Component {...this.props} />
    }
  }
  return SimpleErrorBoundary
}
