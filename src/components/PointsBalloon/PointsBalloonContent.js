import React, { Fragment } from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { Modal, Paper, Button } from "@material-ui/core"
import styled from "styled-components"
import Loading from "../Loading"
import { fetchProgress } from "../../services/progress"
import PagesContext from "../../contexes/PagesContext"
import PartProgress from "./PartProgress"

const StyledModal = styled(Modal)`
  z-index: 500 !important;
`

const ModalContent = styled(Paper)`
  padding: 2rem;
  padding-top: 1rem;
  background-color: white;
  width: 100%;
  max-width: 450px;
  height: 700px;
  max-height: 90vh;
  overflow-y: scroll;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 200 !important;
  font-size: 1rem;
`

const ModalControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

class PointsBalloonContent extends React.Component {
  static contextType = PagesContext

  state = {
    render: false,
    data: null,
    error: null,
  }

  async componentDidMount() {
    this.setState({ render: true })
    try {
      let data = await fetchProgress(this.context)
      this.setState({ data })
    } catch (e) {
      this.setState({ error: e.toString() })
    }
  }

  handleClose = () => {
    this.setState({
      data: null,
      error: null,
    })
    this.props.handleClose()
  }

  render() {
    return (
      <StyledModal
        hideBackdrop={false}
        onClose={this.props.handleClose}
        open={this.props.open}
      >
        <ModalContent>
          <ModalControls>
            <Title>Edistyminen (beta)</Title>
            <Button onClick={this.handleClose}>Sulje</Button>
          </ModalControls>
          <Loading loading={!this.state.data && !this.state.error}>
            <Fragment>
              {this.state.error ? (
                <div>
                  Edistymisen hakeminen kaatui seuraavaan virheeseen:{" "}
                  {this.state.error}
                </div>
              ) : (
                <div>
                  {this.state.data &&
                    Object.entries(this.state.data).map(([name, data]) => {
                      return <PartProgress name={name} data={data} />
                    })}
                </div>
              )}
            </Fragment>
          </Loading>
        </ModalContent>
      </StyledModal>
    )
  }
}

export default withSimpleErrorBoundary(PointsBalloonContent)
