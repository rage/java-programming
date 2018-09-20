import React from 'react'
import styled from 'styled-components'
import Bruce from '../images/banner.svg'

const Banner = styled.div`
  height: 30rem;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #c0392b;
  background-image: url(${Bruce});
  h1 {
    font-size: 2rem;
    color: #c0392b;
    background: white;
    padding: .5rem;
    margin: 1rem;
    text-align: center;
    @media only screen and (min-width: 720px) {
      font-size: 3rem;
    }

  }
  h2 {
    color: #c0392b;
    background: white;
      padding .5rem;
  }
`

export default () => (
  <Banner>
    <h1>Ohjelmoinnin MOOC 2019</h1>
    <h2>ALKAA 14.12.2018</h2>
  </Banner>
)
