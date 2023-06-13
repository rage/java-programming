import React from "react"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const Test = (props) => {
  return <div>{props.children}</div>
}

export default withSimpleErrorBoundary(Test)
