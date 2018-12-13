import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import styled from 'styled-components'
import LoginControls from '../components/LoginControls'

const PleaseLogin = styled(Card)`
  margin-bottom: 2rem;
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

export default props => {
  return (
    <PleaseLogin>
      <CardContent>
        <Wrapper>
          Et ole kirjautunut sisään. Pääset kirjautumaan materiaaliin tästä:
        </Wrapper>
        <div>
          <LoginControls />
        </div>
      </CardContent>
    </PleaseLogin>
  )
}
