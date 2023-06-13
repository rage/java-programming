import React from "react"
import { normalizeExerciseId } from "../../util/strings"

const H4 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <h4 class="material-header" id={id}>
      {children}
    </h4>
  )
}

export default H4
