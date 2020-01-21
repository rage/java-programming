import React from "react"
import styled from "styled-components"
import LoginStateContext from "../contexes/LoginStateContext"
import LoginControls from "../components/LoginControls"
import { withTranslation } from "react-i18next"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"
import Quiz from "moocfi-quizzes"
import { Paper } from "@material-ui/core"
import { accessToken } from "../services/moocfi"
import CourseSettings from "../../course-settings"

const StyledPaper = styled(Paper)`
  overflow: hidden;
  margin: 2rem 0 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 40px -12px !important;
  border-radius: 1rem !important;
`

class QuizPartial extends React.Component {
  static contextType = LoginStateContext

  render() {
    const { id, t } = this.props
    let languageId = "en_US"
    if (CourseSettings.default.language === "fi") {
      languageId = "fi_FI"
    }
    if (!this.context.loggedIn) {
      const loginPrompt = (
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <p>{t("loginToSeeExercise")}</p>
          <LoginControls />
        </div>
      )

      return (
        <StyledPaper id={normalizeExerciseId(`quiz-${id}`)}>
          <Quiz
            id={id}
            languageId={languageId}
            backendAddress="https://quizzes.mooc.fi"
            customContent={loginPrompt}
          />
        </StyledPaper>
      )
    }

    if (!id) {
      return <div>There should be quiz here but no quiz id is specified.</div>
    }
    return (
      <StyledPaper id={normalizeExerciseId(`quiz-${id}`)}>
        <Quiz
          id={id}
          languageId={languageId}
          accessToken={accessToken()}
          backendAddress="https://quizzes.mooc.fi"
        />
      </StyledPaper>
    )
  }
}

export default withTranslation("common")(withSimpleErrorBoundary(QuizPartial))
