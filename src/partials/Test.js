import React from 'react'
import PagesContext from '../contexes/PagesContext'

export default () => (
  <PagesContext.Consumer>{value => <div>{JSON.stringify(value)}</div>}</PagesContext.Consumer>
)
