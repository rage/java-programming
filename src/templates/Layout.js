import React, { Fragment } from "react"
import "../i18n"
import Helmet from "react-helmet"
import Sidebar from "../components/Sidebar"
import ContentArea from "../components/ContentArea"
import TopBar from "../components/TopBar"
import { StaticQuery, graphql } from "gatsby"
import * as store from "store"
import Pheromones from "../util/pheromones"
import styled from "styled-components"
import courseMetaData from "../../course-metadata.json"
import "./reboot.css"
import "./theme.css"
import "./remark.css"
import "focus-visible"
import "typeface-open-sans"
import "typeface-roboto-slab"
import "typeface-roboto-mono"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core"
import { canDoResearch, accessToken } from "../services/moocfi"
import Footer from "../components/Footer"
import PointsBalloon from "../components/PointsBalloon"
import {
  MEDIUM_SIDEBAR_WIDTH,
  LARGE_SIDEBAR_WIDTH,
  MEDIUM_LARGE_BREAKPOINT,
  SMALL_MEDIUM_BREAKPOINT,
} from "../util/constants"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

fontAwesomeConfig.autoAddCss = false

const layoutQuery = graphql`
  query {
    title: site {
      siteMetadata {
        title
      }
    }
  }
`

const Wrapper = styled.div`
  ${props =>
    props.mobileMenuOpen &&
    `
    height: 100vh;
    overflow: hidden;
  `}
`

const SidebarPush = styled.div`
  @media only screen and (min-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    margin-left: ${LARGE_SIDEBAR_WIDTH};
  }
  @media only screen and (max-width: ${MEDIUM_LARGE_BREAKPOINT}) {
    margin-left: ${MEDIUM_SIDEBAR_WIDTH};
  }
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    margin-left: 0;
  }
`

class Layout extends React.Component {
  state = {
    mobileMenuOpen: false,
  }

  componentDidMount() {
    const user = store.get("tmc.user")
    if (typeof window !== "undefined" && user) {
      if (canDoResearch()) {
        setTimeout(() => {
          this.removePheromones = Pheromones.init({
            apiUrl: "https://data.pheromones.io/",
            username: user.username,
            submitAfter: 20,
          })
        }, 1000)
      }
    }
  }

  componentWillUnmount() {
    if (
      typeof window === "undefined" ||
      typeof this.removePheromones === "undefined"
    ) {
      return
    }
    this.removePheromones()
    this.removePheromones = undefined
  }

  toggleMobileMenu = () => {
    this.setState(prev => {
      return {
        mobileMenuOpen: !prev.mobileMenuOpen,
      }
    })
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        {" "}
        <StaticQuery
          query={layoutQuery}
          render={data => {
            const siteTitle = data.title.siteMetadata.title
            return (
              <Wrapper mobileMenuOpen={this.state.mobileMenuOpen}>
                <Helmet
                  defaultTitle={siteTitle}
                  titleTemplate={`%s - ${siteTitle}`}
                  meta={[
                    {
                      name: "description",
                      content:
                        "Helsingin yliopiston kaikille avoin ja ilmainen ohjelmoinnin perusteet opettava verkkokurssi. Kurssilla perehdytään nykyaikaisen ohjelmoinnin perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi algoritmien laatimiseen. Kurssille osallistuminen ei vaadi ennakkotietoja ohjelmoinnista.",
                    },
                    {
                      name: "keywords",
                      content:
                        "ohjelmointi, java, programming, CS1, MOOC, 2019, ohjelmointikurssi, avoin, ilmainen, helsingin yliopisto",
                    },
                  ]}
                />
                <Sidebar
                  mobileMenuOpen={this.state.mobileMenuOpen}
                  toggleMobileMenu={this.toggleMobileMenu}
                />
                <SidebarPush>
                  <TopBar />
                  <ContentArea mobileMenuOpen={this.state.mobileMenuOpen}>
                    {children}
                  </ContentArea>
                  <PointsBalloon />
                  <Footer />
                </SidebarPush>
              </Wrapper>
            )
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseMetaData) }}
        />
      </Fragment>
    )
  }
}

export default withSimpleErrorBoundary(Layout)
