import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import styled from 'styled-components'
import LoginControls from '../components/LoginControls'
import LoginStateContext from '../contexes/LoginStateContext'

const PleaseLoginWrapper = styled(Card)`
  margin-bottom: 2rem;
`

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

export default class PleaseLogin extends React.Component {
  static contextType = LoginStateContext

  render() {
    if (this.context.loggedIn) {
      return <div />
    }
    return (
      <PleaseLoginWrapper>
        <CardContent>
          <Wrapper>
            Et ole kirjautunut sisään. Pääset kirjautumaan materiaaliin tästä:
          </Wrapper>
          <div>
            <LoginControls />
          </div>
        </CardContent>
      </PleaseLoginWrapper>
    )
  }
}
