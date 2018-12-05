import React from 'react'
import PagesContext from '../contexes/PagesContext'
import styled from 'styled-components'

const accentColor = '#CCC'

const Wrapper = styled.div`
  padding 1rem;
  margin-bottom: 2rem;
  border-left: 0.2rem solid ${accentColor};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`

const Body = styled.div`
  padding-bottom: 0.5rem;
  font-family: monospace;
  p {
    margin-bottom: 0;
  }
`

const Note = styled.div`
  float: right;
`

export default props => {
  return (
    <Wrapper>
      <Note>Esimerkkitulostus</Note>
      <Body>{props.children}</Body>
    </Wrapper>
  )
}
