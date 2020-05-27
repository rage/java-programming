import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { withTranslation } from "react-i18next"

const StyledFormControl = styled(FormControl)`
  width: 100%;
`

const DropdownMenu = ({ selectedVariant, setSelectedVariant, t }) => {
  const [labelWidth, setLabelWidth] = useState(0)
  const inputLabelRef = useRef(null)

  useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth)
  })

  const handleChange = event => {
    setSelectedVariant(event.target.value)
  }

  return (
    <StyledFormControl variant="outlined">
      <InputLabel ref={inputLabelRef} htmlFor="course-variant-select">
        {t("whichCourse")}
      </InputLabel>
      <Select
        value={selectedVariant}
        onChange={handleChange}
        input={
          <OutlinedInput
            labelWidth={labelWidth,[]}
            name="course-variant"
            id="course-variant-select"
          />
        }
      >
        <MenuItem value="i">Java Programming I</MenuItem>
        <MenuItem value="ii">Java Programming II</MenuItem>
      </Select>
    </StyledFormControl>
  )
}

export default withTranslation("user")(withSimpleErrorBoundary(DropdownMenu))
