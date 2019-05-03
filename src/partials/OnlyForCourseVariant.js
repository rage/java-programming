import React, { Component } from "react"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { getCourseVariant, loggedIn } from "../services/moocfi"
import LoginStateContext from "../contexes/LoginStateContext"

class OnlyForCourseVariant extends Component {
  static contextType = LoginStateContext
  state = {
    render: false,
  }

  async componentDidMount() {
    this.setState({
      render: true,
    })
    if (!(await loggedIn())) {
      return
    }
    const variant = await getCourseVariant()
    this.setState({
      currentCourseVariant: variant,
    })
  }

  render() {
    if (!this.state.render && !this.state.currentCourseVariant) {
      return <div>Loading...</div>
    }
    if (!this.context.loggedIn) {
      return <div />
    }
    if (this.props.variant === this.state.currentCourseVariant) {
      return this.props.children
    }
    return <div />
  }
}

export default withSimpleErrorBoundary(OnlyForCourseVariant)
