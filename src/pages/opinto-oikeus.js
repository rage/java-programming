import React, { Fragment } from 'react'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import ScheduleTimeline from '../components/ScheduleTimeline'
import MailinglistForm from '../components/MailinglistForm'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'

const IndexPage = () => (
  <Fragment>
    <Sidebar />
    <ContentArea>
      <Banner />
      <Layout>
        <section id="yleistä">
          <h1>Mahdollisuus opinto-oikeuteen</h1>
          <p>
            Keväällä 2019 järjestettävä aikataulutettu Ohjelmoinnin MOOC antaa
            mahdollisuuden päästä opiskelemaan tietojenkäsittelytieteen
            kandiohjelmaan, matemaattis-luonnontieteelliseen tiedekuntaan,
            Helsingin yliopistoon.
          </p>
          <p>
            Opinto-oikeuden hakeminen Ohjelmoinnin MOOCin kautta edellyttää
            osallistumista aikataulutettuun versioon, tehtävien tekemistä
            annetussa aikataulussa, sekä osallistumista toukokuussa
            järjestettävään näyttökokeeseen.
          </p>
          <p>
            Saat kutsun näyttökokeeseen tekemällä aikataulutetun kurssin
            jokaisesta osasta vähintään 90% saatavissa olevista pisteistä.
            Pisteiden laskemisessa otetaan huomioon vain ohjelmointitehtävät.
            Kyselyt sekä mahdollisesti sivulla näkyvä visualisaatio eivät
            vaikuta näihin pisteisiin.
          </p>
          <p>
            Näyttökokeen menestyksekkäästi suorittamalla sinulla on mahdollisuus
            saada opinto-oikeus tietojenkäsittelytieteen luonnontieteen
            kandidaatin (LuK) ja filosofian maisterin (FM) tutkintoihin.
            Näyttökokeeseessa tehdään kurssitehtävien kaltainen hieman laajempi
            ohjelmointitehtävä, sekä kirjoitetaan lyhyt kirjoitelma.
          </p>
          <p>
            MOOC-kurssin perusteella haetaan päähaussa, joka on osa yhteishakua.
            Sinun tulee siis täyttää päähaun hakulomake, jossa asetat Helsingin
            Yliopiston tietojenkäsittelytieteen ohjelman haluamallesi
            prioriteetille.
          </p>
          <p>
            Yhteishaun hakuaika on <b>TODO: YHTEISHAUN HAKUAIKA TÄHÄN</b>
          </p>
          <p>
            Hakulomake sekä lisää tietoa päähausta ja opinnoista löytyy
            osoitteesta <b>TODO: Linkki tähän</b>.
          </p>
        </section>
      </Layout>
    </ContentArea>
  </Fragment>
)

export default IndexPage
