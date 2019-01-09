import React, { Component } from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import AbGroupContext from "../../contexes/AbGroupContext"

class OnlyForAbGroup extends Component {
  static contextType = AbGroupContext

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
    if (!this.context) {
      return (
        <div>
          Error:. Please use only-for-ab-group only inside of ab-study
          components.
        </div>
      )
    }
    if (!this.props.group) {
      return <div>Error: please provide a group.</div>
    }
    if (this.props.group === this.context.toString()) {
      return this.props.children
    }
    return <div />
  }
}

export default withSimpleErrorBoundary(OnlyForAbGroup)
