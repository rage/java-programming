import React from "react"
import moment from "moment"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const start = moment("01/01/2018", "DD/MM/YYYY")
const summerStart = moment("18/03/2019", "DD/MM/YYYY")
const autumnStart = moment("06/05/2019", "DD/MM/YYYY")

const springLink =
  "https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=127404110"
const summerLink =
  "https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=127404483"
const autumnLink =
  "https://www.avoin.helsinki.fi/palvelut/esittely.aspx?o=127404483"

function getLink() {
  const currentDate = moment()
  if (currentDate.isBetween(start, summerStart)) {
    return springLink
  }
  if (currentDate.isBetween(start, autumnStart)) {
    return summerLink
  }
  return springLink
}

const RegistrationLink = () => {
  return <OutboundLink href={getLink()}>{getLink()}</OutboundLink>
}

export default withSimpleErrorBoundary(RegistrationLink)
