import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

  h1 {
    font-size: 3rem;
    background-color: white;
    padding: 0.25rem;
  }
`

export default () => (
  <Banner>
    <h1>Ohjelmoinnin MOOC – 2019</h1>
  </Banner>
)
