import React, { Fragment, lazy, Suspense } from "react"
import { Paper } from "@material-ui/core"
import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import Loading from "../../components/Loading"
const PdfSlideshow = lazy(() => import("./PdfSlideshowLoader"))

const HiddenLinkWrapper = styled.div`
  display: none;
`

const StyledPaper = styled(Paper)`
  @media only screen and (max-width: 800px) {
    overflow-y: scroll;
  }
`

class PdfSlideshowWrapper extends React.Component {
  state = {
    render: false,
    path: undefined,
  }

  constructor(props) {
    super(props)
    this.linkContainer = React.createRef()
  }

  componentDidMount() {
    const links = this.linkContainer.current
    const path = links.querySelector("a").href
    this.setState({ render: true, path })
  }

  render() {
    if (!this.state.render) {
      return (
        <Fragment>
          <Loading loading={true} heightHint="540px" />
          <HiddenLinkWrapper ref={this.linkContainer}>
            {this.props.children}
          </HiddenLinkWrapper>
        </Fragment>
      )
    }
    return (
      <Suspense fallback={<div style={{ height: "540px" }}>Loading...</div>}>
        <StyledPaper>
          <PdfSlideshow slideWidth={800} pdfLocation={this.state.path} />
        </StyledPaper>
      </Suspense>
    )
  }
}

export default withSimpleErrorBoundary(PdfSlideshowWrapper)
