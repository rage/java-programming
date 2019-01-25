import React from "react"
import moment from "moment"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const start = moment("01/01/2018", "DD/MM/YYYY")
const summerStart = moment("12/05/2019", "DD/MM/YYYY")
const autumnStart = moment("15/01/2019", "DD/MM/YYYY")

const springLink = "https://example.com/spring"
const summerLink = "https://example.com/summer"
const autumnLink = "https://example.com/autumn"

function getLink() {
  const currentDate = moment()
  if (currentDate.isBetween(start, summerStart)) {
    return springLink
  }
  if (currentDate.isBetween(start, autumnStart)) {
    return summerLink
  }
  return autumnLink
}

const RegistrationLink = () => {
  return <OutboundLink href={getLink()}>{getLink()}</OutboundLink>
}

export default withSimpleErrorBoundary(RegistrationLink)
