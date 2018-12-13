import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import TopBar from '../components/TopBar'
import { StaticQuery, graphql } from 'gatsby'
import * as store from 'store'
import withMaterialUiRoot from './withMaterialUiRoot'

import './reboot.css'
import './theme.css'
import 'focus-visible'
import 'typeface-open-sans'
import 'typeface-roboto-slab'

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
    }
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
