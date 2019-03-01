import React, { Fragment } from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { Modal, Paper, Button } from "@material-ui/core"
import styled from "styled-components"
import Loading from "../Loading"
import { fetchProgress } from "../../services/progress"
import PagesContext from "../../contexes/PagesContext"
import { getCachedUserDetails } from "../../services/moocfi"
import { SMALL_MEDIUM_BREAKPOINT } from "../../util/constants"
import CourseProgress from "./CourseProgress"

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
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    right: 0rem;
    bottom: 0rem;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    padding: 1rem;
  }
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
    appliesForStudyRight: null,
    currentCourseVariant: null,
  }

  async componentDidMount() {
    this.setState({ render: true })
    try {
      let data = await fetchProgress(this.context)
      let userDetails = await getCachedUserDetails()
      const appliesForStudyRight =
        userDetails?.extra_fields?.applies_for_study_right === "t"
      const currentCourseVariant = userDetails?.extra_fields?.course_variant
      this.setState({ data, appliesForStudyRight, currentCourseVariant })
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
                  <CourseProgress
                    data={this.state.data}
                    appliesForStudyRight={this.state.appliesForStudyRight}
                    currentCourseVariant={this.state.currentCourseVariant}
                  />
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
