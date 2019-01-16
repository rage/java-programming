import React, { Fragment } from "react"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import InfoIcon from "@material-ui/icons/Info"
import styled from "styled-components"
import { Typography } from "@material-ui/core"
import LoginStateContext from "../contexes/LoginStateContext"
import * as store from "store"

const StyledInfoIcon = styled(InfoIcon)`
  vertical-align: middle;
  margin-right: 0.5rem;
`

const StyledTypography = styled(Typography)`
  display: inline-block !important;
  color: white !important;
  a {
    color: white !important;
    box-shadow: inset 0 -3px 0 0 white;
  }
`

export default class Notification extends React.Component {
  static contextType = LoginStateContext

  state = {
    render: false,
    open: true,
  }

  componentDidMount() {
    this.setState({ render: true })
    store.set("pajanotification.shown", true)
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    this.setState({ open: false })
    store.set("pajanotification.shown", true)
  }

  handleRefresh = () => {
    window.location.reload()
  }

  render() {
    if (!this.state.render || store.get("pajanotification.shown")) {
      return <div />
    }
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
                Pajaohjausta on nyt saatavilla! Ensimmäinen paja on huomenna
                torstaina 16.1. klo 12-19 Helsingin Kumpulan kampuksella. Kaikki
                ovat tervetulleita pajaan! Muut paja-ajat ja tarkemmat ohjeet
                löytyvät <a href="/tukivaylat">tukiväylät</a>-sivulta.
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
