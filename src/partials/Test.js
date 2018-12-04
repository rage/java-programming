import React from 'react'
import PagesContext from '../contexes/PagesContext'

export default (props) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}
