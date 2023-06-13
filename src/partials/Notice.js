import React from "react"
import Typography from "@material-ui/core/Typography"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const Notice = (props) => {
  return (
    <Typography color="error" variant="title">
      {props.children}
    </Typography>
  )
}

export default withSimpleErrorBoundary(Notice)
