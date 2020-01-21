import React from "react"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown as icon } from "@fortawesome/free-solid-svg-icons"
import { withTranslation } from "react-i18next"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import ExerciseList from "./ExerciseList"

class ExercisesInThisSection extends React.Component {
  state = {
    render: false,
  }

  componentDidMount() {
    this.setState({ render: true })
  }

  render() {
    if (!this.state.render) {
      return <div>Loading...</div>
    }
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<FontAwesomeIcon icon={icon} />}>
          {this.props.t("exerciseList")}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ExerciseList />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(ExercisesInThisSection),
)
