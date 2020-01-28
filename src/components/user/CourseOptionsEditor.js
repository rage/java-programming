import React from "react"
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Card,
  CardContent,
} from "@material-ui/core"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Loading from "../Loading"

import { updateUserDetails, userDetails } from "../../services/moocfi"

import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle as icon } from "@fortawesome/free-solid-svg-icons"
import DropdownMenu from "./DropdownMenu"
import { Link } from "gatsby"
import { withTranslation } from "react-i18next"

const Row = styled.div`
  margin-bottom: 1.5rem;
`

const Form = styled.form``

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
`

class CourseOptionsEditor extends React.Component {
  async componentDidMount() {
    const data = await userDetails()
    this.setState(
      {
        first_name: data.user_field?.first_name,
        last_name: data.user_field?.last_name,
        email: data.email,
        student_number: data.user_field?.organizational_id,
        applies_for_study_right:
          data.extra_fields?.applies_for_study_right === "t",
        digital_education_for_all:
          data.extra_fields?.digital_education_for_all === "t",
        marketing: data.extra_fields?.marketing === "t",
        research: data.extra_fields?.research,
        currentCourseVariant: data.extra_fields?.course_variant,
        loading: false,
      },
      () => {
        this.validate()
      },
    )
  }

  onClick = async e => {
    e.preventDefault()
    this.setState({ submitting: true })
    let extraFields = {
      applies_for_study_right: this.state.applies_for_study_right,
      digital_education_for_all: this.state.digital_education_for_all,
      marketing: this.state.marketing,
      research: this.state.research,
      course_variant: this.state.currentCourseVariant,
    }
    const userField = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      organizational_id: this.state.student_number,
    }
    await updateUserDetails({
      extraFields,
      userField,
    })
    this.setState({ submitting: false })
    this.props.onComplete()
  }

  state = {
    submitting: false,
    error: true,
    errorObj: {},
    applies_for_study_right: false,
    digital_education_for_all: false,
    marketing: false,
    research: undefined,
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    student_number: undefined,
    loading: true,
    focused: null,
  }

  handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validate()
    })
  }

  handleCheckboxInput = e => {
    const name = e.target.name
    const value = e.target.checked
    this.setState({ [name]: value }, () => {
      this.validate()
    })
  }

  handleFocus = e => {
    const name = e.target.name
    this.setState({ focused: name })
  }

  handleUnFocus = () => {
    this.setState({ focused: null })
  }

  validate = () => {
    this.setState(prev => ({
      error: prev.research === undefined,
    }))
  }

  setSelectedVariant = value => {
    this.setState({ currentCourseVariant: value })
  }

  render() {
    return (
      <FormContainer>
        <Loading loading={this.state.loading} heightHint="490px">
          <InfoBox>
            <Card>
              <CardContent>
                {this.props.t("loggedInWith")}
                {this.state.email}
              </CardContent>
            </Card>
          </InfoBox>
        </Loading>
        <h1>{this.props.t("studentInfo")}</h1>
        <Form>
          <InfoBox>{this.props.t("aboutYourself")}</InfoBox>
          <Loading loading={this.state.loading} heightHint="490px">
            <div>
              <Row>
                <TextField
                  variant="outlined"
                  type="text"
                  label={this.props.t("firstName")}
                  autoComplete="given-name"
                  name="first_name"
                  InputLabelProps={{
                    shrink:
                      this.state.first_name ||
                      this.state.focused === "first_name",
                  }}
                  fullWidth
                  value={this.state.first_name}
                  onChange={this.handleInput}
                  onFocus={this.handleFocus}
                  onBlur={this.handleUnFocus}
                />
              </Row>

              <Row>
                <TextField
                  variant="outlined"
                  type="text"
                  label={this.props.t("lastName")}
                  autoComplete="family-name"
                  name="last_name"
                  InputLabelProps={{
                    shrink:
                      this.state.last_name ||
                      this.state.focused === "last_name",
                  }}
                  fullWidth
                  value={this.state.last_name}
                  onChange={this.handleInput}
                  onFocus={this.handleFocus}
                  onBlur={this.handleUnFocus}
                />
              </Row>

              <Row>
                <TextField
                  variant="outlined"
                  type="text"
                  label={this.props.t("sid")}
                  name="student_number"
                  InputLabelProps={{
                    shrink:
                      this.state.student_number ||
                      this.state.focused === "student_number",
                  }}
                  fullWidth
                  value={this.state.student_number}
                  onChange={this.handleInput}
                  helperText={this.props.t("nosid")}
                  onFocus={this.handleFocus}
                  onBlur={this.handleUnFocus}
                />
              </Row>

              <Row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.marketing}
                      onChange={this.handleCheckboxInput}
                      name="marketing"
                      value="1"
                    />
                  }
                  label={this.props.t("marketing")}
                />
              </Row>
            </div>
          </Loading>

          <h2>{this.props.t("researchTitle")}</h2>

          <p>{this.props.t("research1")}</p>

          <ol>
            <li>{this.props.t("research2")}</li>
            <li>{this.props.t("research3")}</li>
            <li>{this.props.t("research4")}</li>
          </ol>

          <p>
            {this.props.t("research5")}
            <OutboundLink
              href="https://dl.acm.org/citation.cfm?id=2858798"
              target="_blank"
              rel="noopener noreferrer"
            >
              Educational Data Mining and Learning Analytics in Programming:
              Literature Review and Case Studies
            </OutboundLink>
            .
          </p>

          <p>{this.props.t("research6")}</p>

          <p>{this.props.t("research7")}</p>

          <Row>
            <Loading loading={this.state.loading} heightHint="115px">
              <RadioGroup
                aria-label={this.props.t("researchAgree")}
                name="research"
                value={this.state.research}
                onChange={this.handleInput}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio color="primary" />}
                  label={this.props.t("researchYes")}
                />
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label={this.props.t("researchNo")}
                />
              </RadioGroup>
            </Loading>
          </Row>

          <Row>
            <Button
              onClick={this.onClick}
              disabled={this.state.submitting || this.state.error}
              loading={this.state.submitting}
              variant="contained"
              color="primary"
              fullWidth
            >
              {this.props.t("save")}
            </Button>
          </Row>
        </Form>
        {this.state.error && (
          <InfoBox>
            <b>{this.props.t("fillRequired")}</b>
          </InfoBox>
        )}
      </FormContainer>
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(CourseOptionsEditor),
)
