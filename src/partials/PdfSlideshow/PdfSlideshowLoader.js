import React from "react"
import PdfSlideshow, { setPdfJsWorkerPath } from "pdf-slideshow"
import { withPrefix } from "gatsby"

setPdfJsWorkerPath(withPrefix("/pdf.worker.min.js"))

export default props => <PdfSlideshow {...props} />
