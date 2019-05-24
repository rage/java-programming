import React, { Fragment } from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt as icon } from "@fortawesome/free-solid-svg-icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { get } from "lodash"

import {
  fetchProgrammingExerciseDetails,
  fetchProgrammingExerciseModelSolution,
} from "../../services/moocfi"
import { Divider } from "@material-ui/core"
import LoginStateContext from "../../contexes/LoginStateContext"
import LoginControls from "../../components/LoginControls"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../../util/strings"
import Loading from "../../components/Loading"
import Coins from "./Coins"
import ExerciseDescription from "./ExerciseDescription"

const accentColor = "#FAAA38"

const ProgrammingExerciseWrapper = styled.section`
  padding 1rem;
  margin-bottom: 2rem;
  border-left: 0.2rem solid ${accentColor};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 1rem;
  margin-left: 0.5rem;
  color: ${accentColor};
`

const Header = styled.h3`
  font-size: 1.3rem;
  font-weight: normal;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f7f7f9;
`

const HeaderMuted = styled.span`
  color: #818a91 !important;
  font-size: 80%;
  font-weight: 400;
  margin-right: 0.2rem;
`

const Body = styled.div`
  padding-bottom: 0.5rem;
  min-height: 300px;
`

const LoginNag = styled.div`
  margin-bottom: 1rem;
`

const LoginNagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`

const StyledDivider = styled(Divider)`
  margin: 1rem 16px !important;
`

const PointsWrapper = styled.span`
  float: right;
  color: #45484b;
`

const Small = styled.div`
  p {
    font-size: 0.9rem;
    color: #333;
  }
`

class ProgrammingExercise extends React.Component {
  static contextType = LoginStateContext

  // {
  //   "id": 55219,
  //   "available_points": [
  //     {
  //       "id": 619839,
  //       "exercise_id": 55219,
  //       "name": "01-01",
  //       "requires_review": false
  //     }
  //   ],
  //   "name": "osa01-Osa01_01.Hiekkalaatikko",
  //   "publish_time": null,
  //   "deadline": null,
  //   "soft_deadline": null,
  //   "expired": false,
  //   "disabled": false,
  //   "completed": false
  // }
  state = {
    exerciseDetails: undefined,
    modelSolutionModalOpen: false,
    modelSolution: undefined,
    render: false,
  }

  async componentDidMount() {
    this.setState({ render: true })
    if (!this.context.loggedIn) {
      return
    }
    await this.fetch()
  }

  fetch = async () => {
    if (!this.props.tmcname) {
      return
    }
    let exerciseDetails = null
    try {
      exerciseDetails = await fetchProgrammingExerciseDetails(
        this.props.tmcname,
      )
    } catch (error) {
      console.error(error)
    }
    this.setState({
      exerciseDetails,
    })
  }

  onShowModelSolution = async () => {
    try {
      let modelSolution = this.state.modelSolution
      if (!modelSolution) {
        modelSolution = await fetchProgrammingExerciseModelSolution(
          this.state.exerciseDetails.id,
        )
      }

      this.setState({ modelSolutionModalOpen: true, modelSolution })
    } catch (err) {
      console.error("Could not fetch model solution", err)
    }
  }

  onModelSolutionModalClose = () => {
    this.setState({ modelSolutionModalOpen: false })
  }

  onUpdate = async () => {
    this.setState({
      exerciseDetails: undefined,
      modelSolutionModalOpen: false,
      modelSolution: undefined,
    })
    await this.fetch()
  }

  render() {
    const { children, name } = this.props

    if (!this.state.render) {
      return <div>Loading</div>
    }

    const points = get(this.state, "exerciseDetails.available_points.length")

    return (
      <ProgrammingExerciseWrapper
        id={normalizeExerciseId(`programming-exercise-${name}`)}
      >
        <Header>
          <StyledIcon icon={icon} size="1x" />
          <HeaderMuted>Tehtävä: </HeaderMuted>
          {name}
          {points && points > 1 && (
            <PointsWrapper>{points} pisteen tehtävä</PointsWrapper>
          )}
        </Header>
        <Body>
          <div>
            {this.context.loggedIn ? (
              <div>
                {points && points > 1 && (
                  <Small>
                    <p>
                      Huom! Voit saada yksittäisen osan ratkaisusta osan
                      tehtävän pisteistä käyttämällä NetBeansin "submit"-nappia.
                      Lisätietoa ohjelmointitehtävien palautusohjeissa:{" "}
                      <OutboundLink
                        href="https://materiaalit.github.io/tmc-asennus/netbeans/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        ohjeet tehtävien palauttamiseen
                      </OutboundLink>
                      .
                    </p>
                    <StyledDivider />
                  </Small>
                )}
                <ExerciseDescription>{children}</ExerciseDescription>
                {this.state.exerciseDetails === null && (
                  <div>Error loading exercise details</div>
                )}
              </div>
            ) : (
              <div>
                <LoginNag>Kirjaudu sisään nähdäksesi tehtävanannon.</LoginNag>
                <LoginNagWrapper>
                  <LoginControls />
                </LoginNagWrapper>
              </div>
            )}
          </div>

          {this.context.loggedIn && (
            <Loading
              loading={this.state.exerciseDetails === undefined}
              heightHint="305px"
            >
              <div>
                <StyledDivider />
                <Coins
                  exerciseDetails={this.state.exerciseDetails}
                  onUpdate={this.onUpdate}
                  noCoins={this.props.nocoins}
                />

                {this.state.exerciseDetails && (
                  <Fragment>
                    <p>
                      Palauta tehtävä palvelimelle tarkistettavaksi NetBeans
                      ohjelmointiympäristössä:{" "}
                      <OutboundLink
                        href="https://materiaalit.github.io/tmc-asennus/netbeans/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        ohjeet tehtävien palauttamiseen
                      </OutboundLink>
                      .
                    </p>
                    <p>
                      Voit myöhemmin katsoa palautuksiasi Test My Code
                      palautusympäristössä{" "}
                      <OutboundLink
                        href={`https://tmc.mooc.fi/exercises/${
                          this.state.exerciseDetails.id
                        }?use_clients=1`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        täältä
                      </OutboundLink>
                      .
                    </p>
                  </Fragment>
                )}
              </div>
            </Loading>
          )}
        </Body>
      </ProgrammingExerciseWrapper>
    )
  }
}

export default withSimpleErrorBoundary(ProgrammingExercise)
