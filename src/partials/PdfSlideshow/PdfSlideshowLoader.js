import React from "react"
import PdfSlideshow, { setPdfJsWorkerPath } from "pdf-slideshow"
import { withPrefix } from "gatsby"
import ReduxActionAnalytics from "redux-action-analytics"
import { canDoResearch } from "../../services/moocfi"
import * as storejs from "store"

setPdfJsWorkerPath(withPrefix("/pdf.worker.min.js"))

export default (props) => {
  const middleware = []
  const analytics = new ReduxActionAnalytics(
    "https://usage.testmycode.io/api/v0/data",
    "pdf-slideshow",
    props.pdfLocation,
    10000,
    () => {
      const user = storejs.get("tmc.user")
      if (user === undefined) {
        return {}
      }
      return {
        username: user.username,
      }
    },
  )
  if (canDoResearch()) {
    middleware.push(analytics.getMiddleware())
  }
  return <PdfSlideshow {...props} middleware={middleware} />
}
