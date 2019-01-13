import React, { Fragment } from "react"
import LoginStateContext from "../../contexes/LoginStateContext"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"

import PointsBalloonBalloon from "./PointsBalloonBalloon"
import PointsBalloonContent from "./PointsBalloonContent"

const PointsBalloonContainer = styled.div`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 50;
`

class PointsBalloon extends React.Component {
  static contextType = LoginStateContext

  state = {
    render: false,
    open: false,
  }

  componentDidMount() {
    this.setState({ render: true })
  }

  onClick = () => {
    this.setState({ open: true })
  }

  onClose = () => {
    this.setState({ open: false })
  }

  render() {
    if (!this.state.render || !this.context.loggedIn) {
      return <Fragment />
    }
    return (
      <PointsBalloonContainer>
        {!this.state.open && <PointsBalloonBalloon onClick={this.onClick} />}
        {this.state.open && (
          <PointsBalloonContent
            open={this.state.open}
            handleClose={this.onClose}
          />
        )}
      </PointsBalloonContainer>
    )
  }
}

export default withSimpleErrorBoundary(PointsBalloon)
