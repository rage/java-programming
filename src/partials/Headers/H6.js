import React from "react"
import { normalizeExerciseId } from "../../util/strings"

const H6 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <h6 class="material-header" id={id}>
      {children}
    </h6>
  )
}

export default H6
