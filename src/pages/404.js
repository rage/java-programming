import React from "react"
import Layout from "../templates/Layout"
import Container from "../components/Container"
import { withLoginStateContext } from "../contexes/LoginStateContext"
import Helmet from "react-helmet"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Helmet title="404" />
      <h1>Ei löytynyt</h1>
      <p>Olet päätynyt osoitteeseen, jota ei ole olemassa.</p>
    </Container>
  </Layout>
)

export default withLoginStateContext(NotFoundPage)
