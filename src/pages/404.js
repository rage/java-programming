import React from 'react'
import Layout from '../templates/Layout'
import Container from '../components/Container'
import { withLoginStateContext } from '../contexes/LoginStateContext'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>Ei löytynyt</h1>
      <p>Olet päätynyt osoitteeseen, jota ei ole olemassa.</p>
    </Container>
  </Layout>
)

export default withLoginStateContext(NotFoundPage)
