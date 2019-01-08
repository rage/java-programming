import React, { Fragment } from "react"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import InfoIcon from "@material-ui/icons/Info"
import styled from "styled-components"
import { Typography } from "@material-ui/core"

const StyledInfoIcon = styled(InfoIcon)`
  vertical-align: middle;
  margin-right: 0.5rem;
`

const StyledTypography = styled(Typography)`
  display: inline-block !important;
  color: white !important;
`

export default class Notification extends React.Component {
  state = {
    open: true,
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    this.setState({ open: false })
  }

  handleRefresh = () => {
    window.location.reload()
  }

  render() {
    return (
      <Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.open}
          onClose={this.handleClose}
          ContentProps={{ "aria-describedby": "message-id" }}
          message={
            <Fragment>
              <StyledInfoIcon />
              <StyledTypography>
                Korjaamme tällä hetkellä teknistä vikaa / We are currently
                fixing technical issues.
              </StyledTypography>
            </Fragment>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Fragment>
    )
  }
}
