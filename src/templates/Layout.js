import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'
import TopBar from '../components/TopBar'
import { StaticQuery, graphql } from 'gatsby'

import './reboot.css'
import './theme.css'
import 'focus-visible'

const layoutQuery = graphql`
  query {
    title: site {
      siteMetadata {
        title
      }
    }
  }
`

export default class Layout extends React.Component {
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
