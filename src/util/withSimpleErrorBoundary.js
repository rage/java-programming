import React from 'react'

export default function withSimpleErrorBoundary(Component) {
  class SimpleErrorBoundary extends React.Component {
    state = {
      error: null,
    }

    static getDerivedStateFromError(error) {
      let errorMessage = 'Tuntematon virhe'
      try {
        errorMessage = JSON.stringify(error, undefined, 2)
      } catch (e) {
        console.error('Could not stringify error:', e)
      }
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
