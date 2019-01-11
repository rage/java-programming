import React, { Fragment } from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt as icon } from "@fortawesome/free-solid-svg-icons"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import {
  fetchProgrammingExerciseDetails,
  fetchProgrammingExerciseModelSolution,
} from "../services/moocfi"
import { Button, Paper, Card, CardContent, Divider } from "@material-ui/core"
import Modal from "@material-ui/core/Modal"
import LoginStateContext from "../contexes/LoginStateContext"
import LoginControls from "../components/LoginControls"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"
import Loading from "../components/Loading"

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

const ModalContent = styled(Paper)`
  padding: 5rem;
  overflow-y: scroll;
  max-height: 100vh;
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

const TokenContainer = styled.div`
  margin-bottom: 1rem;
  p {
    font-size: 1rem;
    color: #2e3032;
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
    const tokenThreshHold = this.state?.exerciseDetails?.course
      ?.grant_model_solution_token_every_nth_completed_exercise
    //const _totalTokens = this.state?.exerciseDetails?.course?.total_model_solution_tokens
    const availableTokens = this.state?.exerciseDetails?.course
      ?.available_model_solution_tokens
    const modelSolutionTokenUsedOnThisExercise = this.state?.exerciseDetails
      ?.model_solution_token_used_on_this_exercise

    if (!this.state.render) {
      return <div>Loading</div>
    }

    return (
      <ProgrammingExerciseWrapper
        id={normalizeExerciseId(`programming-exercise-${name}`)}
      >
        <Header>
          <StyledIcon icon={icon} size="1x" />
          <HeaderMuted>Tehtävä: </HeaderMuted>
          {name}
        </Header>
        <Body>
          <div>
            {this.context.loggedIn ? (
              <div>
                {children}
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
                {tokenThreshHold && (
                  <Fragment>
                    <StyledDivider />
                    <TokenContainer>
                      <p>
                        Joka kerta kun olet saanut <i>{tokenThreshHold}</i>{" "}
                        tehtävää tehtyä, saat kolikon. Kolikoilla voi ostaa
                        tehtävien vastauksia ja lunastaa itsesi mahdollisesta
                        jumista.{" "}
                        {availableTokens === 1 ? (
                          <span> Käytössäsi on tällä hetkellä 1 kolikko.</span>
                        ) : availableTokens > 0 ? (
                          <span>
                            {" "}
                            Käytössäsi on tällä hetkellä {availableTokens}{" "}
                            kolikkoa.
                          </span>
                        ) : (
                          <span>Sinulla ei ole vielä yhtään kolikkoa.</span>
                        )}
                      </p>
                      <p>
                        Kolikkoja kuluu vain silloin kun painat tämän tekstin
                        alapuolella olevaa nappia, jossa lukee "kuluttaa
                        kolikon". Pystyt katsomaan mallivastauksen ilman
                        kolikkoja Test My Code -palvelusta joko Netbeanssin tai
                        TMC:n nettisivun kautta sen jälkeen kun olet saanut
                        tehtävän oikein.
                      </p>

                      {(availableTokens > 0 ||
                        modelSolutionTokenUsedOnThisExercise) && (
                        <Button
                          onClick={this.onShowModelSolution}
                          variant="outlined"
                          color="secondary"
                        >
                          Katso mallivastaus (
                          {modelSolutionTokenUsedOnThisExercise
                            ? "olet käyttänyt jo kolikon tähän mallivastaukseen"
                            : "kuluttaa kolikon"}
                          )
                        </Button>
                      )}

                      <Button variant="outlined" onClick={this.onUpdate}>
                        Päivitä
                      </Button>
                    </TokenContainer>

                    <Modal
                      open={this.state.modelSolutionModalOpen}
                      onClose={this.onModelSolutionModalClose}
                    >
                      {this.state.modelSolution && (
                        <ModalContent>
                          <h1>Mallivastaus</h1>
                          {this.state.modelSolution.solution.files.map(
                            fileEntry => {
                              console.log(fileEntry)
                              return (
                                <Card>
                                  <CardContent>
                                    <h2>{fileEntry.path}</h2>
                                    <pre class="language-java">
                                      {fileEntry.contents}
                                    </pre>
                                  </CardContent>
                                </Card>
                              )
                            },
                          )}
                        </ModalContent>
                      )}
                    </Modal>
                  </Fragment>
                )}
                {this.state.exerciseDetails && (
                  <Fragment>
                    <p>
                      Palauta tehtävä palvelimelle tarkistettavaksi Netbeans
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
