import React from 'react'

export default (props) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}
