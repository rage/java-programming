import React, { Component } from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import LoginStateContext from "../../contexes/LoginStateContext"

import { Card } from "@material-ui/core"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle as icon } from "@fortawesome/free-solid-svg-icons"
import LoginControls from "../../components/LoginControls"
import Loading from "../../components/Loading"
import { fetchAbGroup } from "../../services/abstudio"
import AbGroupContext from "../../contexes/AbGroupContext"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25em;
  font-size: 3.3em !important;
`

const Wrapper = styled(Card)`
  margin-bottom: 2rem;
  padding: 1rem;
`

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const P = styled.p`
  margin-bottom: 1rem !important;
`

class AbStudy extends Component {
  static contextType = LoginStateContext

  state = {
    error: undefined,
    render: false,
    group: undefined,
  }

  async componentDidMount() {
    this.setState({ render: true })
    if (!this.props.id) {
      return
    }
    try {
      const { group } = await fetchAbGroup(this.props.id)
      if (!group) {
        this.setState({ error: "Group is null" })
      }
      this.setState({ group })
    } catch (e) {
      this.setState({ error: e.toString() })
    }
  }

  render() {
    if (!this.state.render) {
      return (
        <Wrapper>
          Ladataan kurssisisällön osaa...
          <Loading heightHint="200px" />
        </Wrapper>
      )
    }
    if (this.state.error) {
      return (
        <Wrapper>
          <MessageWrapper>
            <StyledIcon icon={icon} />
            <div>
              <P>
                Kurssisisällön osaa ei pystytty lataamaan virheen takia:{" "}
                <pre>{this.state.error}</pre>
              </P>
              <div>
                <LoginControls />
              </div>
            </div>
          </MessageWrapper>
        </Wrapper>
      )
    }
    if (!this.props.id) {
      return (
        <Wrapper>
          Tässä kohtaa on sisältöä, joka ei ole oikein määritelty. Syy: id
          puuttuu.
        </Wrapper>
      )
    }
    if (!this.context.loggedIn) {
      return (
        <Wrapper>
          <MessageWrapper>
            <StyledIcon icon={icon} />
            <div>
              <P>
                Tässä kohtaa materiaalia on sisältöä, joka näkyy vain
                sisäänkirjautuneille käyttäjille. Kirjaudu sisään nähdäksesi
                sen.
              </P>
              <div>
                <LoginControls />
              </div>
            </div>
          </MessageWrapper>
        </Wrapper>
      )
    }
    if (!this.state.group) {
      return (
        <Wrapper>
          Ladataan kurssisisällön osaa...
          <Loading heightHint="200px">{this.props.children}</Loading>
        </Wrapper>
      )
    }
    return (
      <div>
        <AbGroupContext.Provider value={this.state.group}>
          {this.props.children}
        </AbGroupContext.Provider>
      </div>
    )
  }
}

export default withSimpleErrorBoundary(AbStudy)
