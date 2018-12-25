import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../templates/Layout'
import Container from '../components/Container'
import { withLoginStateContext } from '../contexes/LoginStateContext'

const IndexPage = () => (
  <Layout>
    <Container>
      <Helmet title="Opettajille ja opinto-ohjaajille" />
      <section id="yleistä">
        <h1>Opettajille ja opinto-ohjaajille</h1>
        <p>
          Kurssin tai sen osan saa ottaa vapaasti osaksi peruskoulun, lukion,
          ammattikoulun, ammattikorkeakoulun tai yliopiston opintotarjontaa.
          Kerro opiskelijoillesi mahdollisuudesta osallistua kurssille.
        </p>
        <p>
          Jos haluat, että kurssillasi on koe ja opiskelijasi saavat kurssista
          merkinnän Helsingin yliopiston Avoimelta yliopistolta, ohjeista
          opiskelijasi osallistumaan Helsingin yliopiston Avoimen yliopiston
          ilmaiseksi tarjoamaan kokeeseen. Saat lisätietoja tästä järjestelystä
          ottamalla meihin yhteyttä (mooc@cs.helsinki.fi).
        </p>
        <p>
          Avoimen yliopiston kurssisuoritus luetaan automaattisesti osaksi
          Helsingin yliopiston opintoja. Useat toisen asteen oppilaitokset kuten
          lukiot tarjoavat Ohjelmoinnin MOOCin suorittamisesta
          suoritusmerkintöjä.
        </p>
      </section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
