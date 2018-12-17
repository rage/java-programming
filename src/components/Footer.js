import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../images/banner.svg'
import { SIDEBAR_WIDTH } from './Sidebar'
import { Card, CardContent } from '@material-ui/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import withSimpleErrorBoundary from '../util/withSimpleErrorBoundary'

import UHLogo from '../images/uh-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  margin-bottom: 1rem;
  margin: 1rem;
`

const SocialContainer = styled.div``

const ContentContainer = styled.div`
  padding: 1rem 0;
`

const GithubContainer = styled.div`
  padding-top: 1rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const FooterWrapper = styled.footer`
  height: 35rem;
  position: relative;
  @media only screen and (min-width: 1200px) {
    margin-left: ${SIDEBAR_WIDTH};
  }
`

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  filter: invert(1) grayscale(1) brightness(1.5) opacity(0.5);
  z-index: -50000;
`

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledCard = styled(Card)`
  width: 90%;
  max-width: 800px;
`

const StyledCardContent = styled(CardContent)`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <FooterBackground />
        <FooterContent>
          <StyledCard>
            <StyledCardContent>
              <GithubContainer>
                <OutboundLink
                  href="https://github.com/rage/ohjelmointi-19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIcon
                    icon={faGithub}
                    size="3x"
                    title="Materiaalin lähdekoodi"
                  />
                  <div>Materiaalin lähdekoodi</div>
                </OutboundLink>
              </GithubContainer>
              <ContentContainer>
                Kurssin on tehnyt Helsingin yliopiston{' '}
                <OutboundLink
                  href="https://www.helsinki.fi/en/researchgroups/data-driven-education"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agile Education Research -tutkimusryhmä
                </OutboundLink>
                .
              </ContentContainer>
              <SocialContainer>
                <OutboundLink
                  href="https://twitter.com/moocfi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIcon icon={faTwitter} size="3x" />
                </OutboundLink>
                <OutboundLink
                  href="https://www.facebook.com/Moocfi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIcon icon={faFacebook} size="3x" />
                </OutboundLink>
                <OutboundLink
                  href="https://www.youtube.com/channel/UCkHoQ5p9skFdyjrV3_tnUrA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledIcon icon={faYoutube} size="3x" />
                </OutboundLink>
              </SocialContainer>
              <div>
                <OutboundLink
                  href="https://helsinki.fi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="University of Helsinki" src={UHLogo} />
                </OutboundLink>
              </div>
            </StyledCardContent>
          </StyledCard>
        </FooterContent>
      </FooterWrapper>
    )
  }
}

export default withSimpleErrorBoundary(Footer)
