import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import TopBar from '../components/TopBar'
import { StaticQuery, graphql } from 'gatsby'
import * as store from 'store'
import withMaterialUiRoot from './withMaterialUiRoot'
import Pheromones from '../util/pheromones'

import './reboot.css'
import './theme.css'
import './remark.css'
import 'focus-visible'
import 'typeface-open-sans'
import 'typeface-roboto-slab'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core'
import { canDoResearch } from '../services/moocfi'

fontAwesomeConfig.autoAddCss = false;

const layoutQuery = graphql`
  query {
    title: site {
      siteMetadata {
        title
      }
    }
  }
`

class Layout extends React.Component {
  componentDidMount() {
    const user = store.get('tmc.user')
    if (typeof window !== 'undefined' && user) {
      if (typeof window.Quiznator === 'undefined') {
        document.addEventListener('quiznatorLoaded', () => {
          this.setQuiznatorUser(user)
        })
      } else {
        this.setQuiznatorUser(user)
      }
      if (canDoResearch()) {
        setTimeout(() => {
          this.removePheromones = Pheromones.init({
            apiUrl: 'https://data.pheromones.io/',
            username: user.username,
            submitAfter: 20,
          })
        }, 1000)
      }
    }
  }

  componentWillUnmount() {
    if (
      typeof window === 'undefined' ||
      typeof this.removePheromones === 'undefined'
    ) {
      return
    }
    this.removePheromones()
    this.removePheromones = undefined
  }

  setQuiznatorUser = user => {
    window.Quiznator.setUser({
      id: user.username,
      accessToken: user.accessToken,
    })
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => {
          return (
            <Fragment>
              <Helmet
                title={data.title.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Ohjelmoinnin MOOC 2019' },
                  {
                    name: 'keywords',
                    content: 'ohjelmointi, java, programming, CS1',
                  },
                ]}
              />
              <Sidebar />
              <TopBar />
              <ContentArea>{children}</ContentArea>
            </Fragment>
          )
        }}
      />
    )
  }
}

export default withMaterialUiRoot(Layout)
