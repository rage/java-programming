import React from 'react'
import Helmet from 'react-helmet'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../templates/Layout'
import Container from '../components/Container'
import { withLoginStateContext } from '../contexes/LoginStateContext'

const IndexPage = () => (
  <Layout>
    <Container>
      <Helmet title="Tukiväylät" />
      <h1>Tukiväylät</h1>

      <p>
        Kurssilla on vertaistukeen perustuva keskustelukanava, jonka lisäksi
        tammikuun puolesta välistä lähtien kaikilla kurssilaisilla on
        mahdollisuus ohjaukseen Helsingin yliopiston kumpulan kampuksella.
      </p>
      <h2>Keskustelukanava</h2>
      <p>
        Kurssilla on käytössä Telegram-keskusteluhuone. Suosittelemme, että
        käytät tukikanavaa joko Telegramin selaimessa toimivalla versiolla tai
        Telegrammin työpöytäohjelmalla.
      </p>

      <p>
        Pääset kanavalle tästä linkistä:{' '}
        <OutboundLink href="https://t.me/ohjelmointi19">
          https://t.me/ohjelmointi19
        </OutboundLink>
        . Pääset Telegrammin selaimessa toimivaan versioon täältä:{' '}
        <OutboundLink href="https://web.telegram.org/">
          https://web.telegram.org
        </OutboundLink>
        .
      </p>

      <p>
        Kanavan osallistujat ovat kanssaopiskelijoita sekä vapaaehtoisia
        ohjaajia. Kanavan toiminta perustuu vapaaehtoisuuteen. Autathan muita
        myös vastavuoroisesti.
      </p>

      <p>
        Jos kysyt kanavalta apua ohjelmointitehtävään, voit liittää kysymykseesi
        myös ohjelmasi lähdekoodin. Valitse Netbeanssista "<code>TMC</code>" ->
        "<code>Send code to TMC Pastebin</code>" ja valitse avautuvasta
        ikkunasta "<code>Send</code>". Tämän jälkeen saat linkin koodiisi, jonka
        voit jakaa keskustelukanavalla apupyynnön yhteydessä.
      </p>

      <h2>Pajaohjaus</h2>

      <p>
        Tammikuusta 2019 lähtien kurssille tulee mahdollisuus pajaohjaukseen
        Helsingin yliopiston kumpulan kampuksella. Kaikki ovat tervetulleita
        pajaan! Lisätietoa pajasta tulee tänne myöhemmin.
      </p>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
