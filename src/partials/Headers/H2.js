import React from "react"
import { normalizeExerciseId } from "../../util/strings"

const H2 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <h2 class="material-header" id={id}>
      {children}
    </h2>
  )
}

export default H2
