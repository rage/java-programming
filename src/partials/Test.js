import React from "react"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const Test = (props) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default withSimpleErrorBoundary(Test)
