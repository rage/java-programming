import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt as icon } from "@fortawesome/free-solid-svg-icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { get } from "lodash"
import { Card, CardContent } from "@material-ui/core"

import {
  fetchProgrammingExerciseDetails,
  fetchProgrammingExerciseModelSolution,
} from "../../services/moocfi"
import LoginStateContext from "../../contexes/LoginStateContext"
import LoginControls from "../../components/LoginControls"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../../util/strings"
import ExerciseDescription from "./ExerciseDescription"
import ExtraDetails from "./ExtraDetails"
import StyledDivider from "../../components/StyledDivider"

const accentColor = "#FAAA38"

const ProgrammingExerciseWrapper = styled(Card)`
  margin: 3.5rem 0;
  // border-left: 0.2rem solid ${accentColor};
  border-radius: 1rem !important;
  box-shadow: 0 8px 40px -12px rgba(0,0,0,0.3) !important;
  padding: 0 !important;
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 1.5rem;
  margin-left: 0.5rem;
  color: white;
  position: relative;
  bottom: -13px;
`

const Header = styled.div`
  font-size: 1.3rem;
  font-weight: normal;
  padding 1rem 0;
  border-bottom: 1px solid #f7f7f9;
  background-color: #D23D48;
  display: flex;
  flex-direction: row;
  align-items: 0;
  color: white;
  padding: 1rem;
  padding-bottom: 1.5rem;
  h3 {
    margin-bottom: 0;
  }
`

const HeaderTitleContainer = styled.div`
  flex: 1;
`

const HeaderMuted = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-right: 0.2rem;
  position: relative;
  bottom: -3px;
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

const PointsWrapper = styled.span`
  color: white;
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
          <StyledIcon icon={icon} size="2x" />
          <HeaderTitleContainer>
            <HeaderMuted>Ohjelmointitehtävä: </HeaderMuted>
            <h3>{name}</h3>
          </HeaderTitleContainer>
          {points && points > 1 && (
            <PointsWrapper>{points} pisteen tehtävä</PointsWrapper>
          )}
        </Header>
        <CardContent>
          <Body>
            <div>
              {this.context.loggedIn ? (
                <div>
                  {points && points > 1 && (
                    <Small>
                      <p>
                        Huom! Voit saada yksittäisen osan ratkaisusta osan
                        tehtävän pisteistä käyttämällä NetBeansin
                        "submit"-nappia. Lisätietoa ohjelmointitehtävien
                        palautusohjeissa:{" "}
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
              <div>
                <StyledDivider />
                <ExtraDetails
                  exerciseDetails={this.state.exerciseDetails}
                  onUpdate={this.onUpdate}
                  noCoins={this.props.noCoins}
                />
              </div>
            )}
          </Body>
        </CardContent>
      </ProgrammingExerciseWrapper>
    )
  }
}

export default withSimpleErrorBoundary(ProgrammingExercise)
