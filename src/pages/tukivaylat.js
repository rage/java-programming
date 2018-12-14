import React, { Fragment } from 'react'

import Layout from '../templates/Layout'
import Container from '../components/Container'
import { withLoginStateContext } from '../contexes/LoginStateContext'

const IndexPage = () => (
  <Layout>
    <Container>
      <h1>Tukiväylät</h1>

      <p>
        Kurssilla on muutamia tukiväyliä, joista suurin osa perustuu vertaistukeen. Saatamme lisätä kurssin edetessä lisää tukikanavia, tarpeesta riippuen.
      </p>
      <h2>Keskustelukanava</h2>
      <p>
        Kurssilla on käytössä Telegram-keskusteluhuone. Suosittelemme, että
        menet tukikanavalle joko Telegrammin selaimessa toimivalla versiolla tai
        Telegrammin työpöytäohjelmalla.
      </p>

      <p>
        Pääset kanavalle tästä linkistä:{' '}
        <a href="https://t.me/ohjelmointi19">https://t.me/ohjelmointi19</a>.
        Pääset Telegrammin selaimessa toimivaan versioon täältä:{' '}
        <a href="https://web.telegram.org/">https://web.telegram.org</a>.
      </p>

      <p>
        Huomaathan, että suurin osa kanavan osallistujista ovat
        kanssaopiskelijoita ja kurssin aiemmin tehneitä opiskelijoita. Kanavan
        toiminta perustuu vapaaehtoisuuteen.
      </p>

      <p>
        Jos kysyt kanavalta apua ohjelmointitehtävään, valitse ensiksi
        Netbeanssista "<code>TMC</code>" -> "
        <code>Send code to TMC Pastebin</code>" ja valitse avautuvasta ikkunasta
        "<code>Send</code>". Tämän jälkeen saat linkin koodiisi, jonka voit
        jakaa keskustelukanavalla apupyynnön yhteydessä.
      </p>

      <h2>Pajaohjaus</h2>

      <p>Tammikuusta 2019 lähtien kurssille tulee mahdollisuus pajaohjaukseen Helsingin yliopiston kumpulan kampuksella. Kaikki ovat tervetulleita pajaan! Lisätietoa pajasta tulee tänne myöhemmin.</p>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
