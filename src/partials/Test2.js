import React from 'react'

export default props => {
  console.log('props', props)
  return <div>{props.children}</div>
}
