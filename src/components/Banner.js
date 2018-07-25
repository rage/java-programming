import React from 'react'
import styled from 'styled-components'
import Bruce from '../images/banner.svg'

const Banner = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background: url(${Bruce});
  h1 {
    font-size: 3rem;
    color: #c0392b;
    padding: 0.25rem;
    background: white;
    padding: .5rem;
  }
`

export default () => (
  <Banner>
    <h1>Ohjelmoinnin MOOC – 2019</h1>
  </Banner>
)
