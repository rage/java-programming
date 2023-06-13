import React from "react"
import { normalizeExerciseId } from "../../util/strings"

const H5 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <h5 class="material-header" id={id}>
      {children}
    </h5>
  )
}

export default H5
