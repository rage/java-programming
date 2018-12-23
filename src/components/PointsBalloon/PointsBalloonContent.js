import React, { Fragment } from 'react'
import LoginStateContext from '../../contexes/LoginStateContext'
import withSimpleErrorBoundary from '../../util/withSimpleErrorBoundary'
import { Modal, Paper, Button } from '@material-ui/core'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Loading from '../Loading'


const StyledModal = styled(Modal)`
  z-index: 500 !important;
`

const ModalContent = styled(Paper)`
  padding: 2rem;
  padding-top: 1rem;
  background-color: white;
  width: 100%;
  max-width: 450px;
  height: 500px;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 200 !important;
`

const ModalControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  font-size: 1.5rem;
`

const data = [
  { group: 'Osa 1', Ohjelmointitehtävät: 80, Kyselyt: 20 },
  { group: 'Osa 2', Ohjelmointitehtävät: 30, Kyselyt: 40 },
]

class PointsBalloonContent extends React.Component {
  static contextType = LoginStateContext

  state = {
    render: false,
    data: null,
  }

  componentDidMount() {
    this.setState({ render: true })
    this.setState({ data })
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
            <Title>Edistyminen</Title>
            <Button onClick={this.props.handleClose}>Sulje</Button>
          </ModalControls>
          <Loading loading={!this.state.data}>
            <Fragment>
              <p>
                Tähän tulee visualisaatio edistymisestäsi heti kun olemme
                saaneet tämän ominaisuuden toteutettua. Odotellessasi voit
                tutkia edistymisestäsi ohjelmointitehtävissä
                TMC:ssä:{' '}
                <OutboundLink href="https://tmc.mooc.fi/participants/me">
                  https://tmc.mooc.fi/participants/me
                </OutboundLink>
                . Kiitos kärsivällisyydestäsi!
              </p>
            </Fragment>
          </Loading>
        </ModalContent>
      </StyledModal>
    )
  }
}

export default withSimpleErrorBoundary(PointsBalloonContent)
