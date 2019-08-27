import React from "react"
import Loading from "../../components/Loading"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core"
import Coins from "./Coins"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import styled from "styled-components"

const StyledTypography = styled(Typography)`
  margin-bottom: 0.5rem !important;
`

const ExtraDetails = ({ exerciseDetails, onUpdate, noCoins }) => {
  if (!exerciseDetails) {
    return <Loading heightHint="305px" />
  }
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Ohjeet tehtävän palauttamiseen</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <StyledTypography>
              Palauta tehtävä palvelimelle tarkistettavaksi NetBeans
              ohjelmointiympäristössä:{" "}
              <OutboundLink
                href="https://materiaalit.github.io/tmc-asennus/netbeans/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ohjeet tehtävien palauttamiseen
              </OutboundLink>
              .
            </StyledTypography>
            <StyledTypography>
              Voit myöhemmin katsoa palautuksiasi Test My Code
              palautusympäristössä{" "}
              <OutboundLink
                href={`https://tmc.mooc.fi/exercises/${exerciseDetails.id}?use_clients=1`}
                rel="noopener noreferrer"
                target="_blank"
              >
                täältä
              </OutboundLink>
              .
            </StyledTypography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Miten katsoa mallivastaus</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Coins
            exerciseDetails={exerciseDetails}
            onUpdate={onUpdate}
            noCoins={noCoins}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default ExtraDetails
