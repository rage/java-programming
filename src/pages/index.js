import React, { Fragment } from 'react'

import Layout from '../components/layout'
import Banner from '../components/Banner'
import Logo from '../components/Logo';

const IndexPage = () => (
  <Fragment>
    <Logo />
    <Banner />
    <Layout>
      <p>
        Ohjelmoinnin MOOC on ilmainen verkkokurssi, jossa perehdytään
        algoritmien laatimiseen ja nykyaikaisen ohjelmoinnin perusideoihin.
        Opiskelijalta ei edellytetä ennakkotietoja ohjelmoinnista.
      </p>
      <ul>
        <li>
          Ohjelmoinnin MOOC vastaa sisällöltään Helsingin yliopiston
          tietojenkäsittelytieteen laitoksen kursseja Ohjelmoinnin perusteet ja
          Ohjelmoinnin jatkokurssi. Kurssit vastaavat yhteensä kymmentä
          opintopistettä (5+5).
        </li>
        <li>
          Ohjelmoinnin MOOC tarjoaa mahdollisuuden opinto-oikeuteen
          tietojenkäsittelytieteen opintoihin Helsingin yliopistolla. Mikäli
          haet kurssin kautta opinto-oikeutta, lue kaikki opinto-oikeuden
          hakemiseen liittyvät tiedot huolellisesti. Esimerkiksi tehtävien
          aikarajoista EI voida joustaa lainkaan. Ehdot opinto-oikeuden
          saamiseksi päivittyvät lähempänä yhteishakua.
        </li>
      </ul>

      <h2>Kurssin kaksi versiota</h2>

      <p>
        Kurssista julkaistaan aluksi yksi aikataulutettu versio. Niille, jotka ei
        pysy aikataulussa mukana, tullaan tarjoamaan mahdollisuus siirtyä
        aikatauluttomaan versioon.
      </p>

      <h2>Sisältö ja aikataulu</h2>

      <p>
        Kurssi koostuu neljästätoista tehtäväsarjasta. Kunkin tehtäväsarjan
        tekemiseen kannattaa varata aikaa noin 5-20 tuntia. Varaamme oikeuden
        aikataulun ja aiheiden muutoksiin, kuitenkin niin, että jokaista
        tehtäväsarjaa on mahdollista suorittaa vähintään kahden viikon ajan.
      </p>

      <p>
        Kurssin sisältö tarkentuu kurssin edetessä. Tietoa kurssin aikatauluista
        sekä sisällöstä lisätään tälle sivulle kurssin alettua.
      </p>

      <table>
        <thead>
          <tr>
            <th>Aikataulu</th>
            <th>Julkaisu</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Osa 1</td>
            <td>14.12.2018</td>
            <td>21.1.2019</td>
          </tr>
          <tr>
            <td>Osa 2</td>
            <td>28.12.2018</td>
            <td>28.1.2019</td>
          </tr>
          <tr>
            <td>Osa 3</td>
            <td>11.1.2019</td>
            <td>4.2.2019</td>
          </tr>
          <tr>
            <td>Osa 4</td>
            <td>25.1.2019</td>
            <td>11.2.2019</td>
          </tr>
          <tr>
            <td>Osa 5</td>
            <td>1.2.2019</td>
            <td>18.2.2019</td>
          </tr>
          <tr>
            <td>Osa 6</td>
            <td>8.2.2019</td>
            <td>25.2.2019</td>
          </tr>
          <tr>
            <td>Osa 7</td>
            <td>15.2.2019</td>
            <td>4.3.2019</td>
          </tr>
          <tr>
            <td>Osa 8</td>
            <td>1.3.2019</td>
            <td>18.3.2019</td>
          </tr>
          <tr>
            <td>Osa 9</td>
            <td>8.3.2019</td>
            <td>25.3.2019</td>
          </tr>
          <tr>
            <td>Osa 10</td>
            <td>15.3.2019</td>
            <td>1.4.2019</td>
          </tr>
          <tr>
            <td>Osa 11</td>
            <td>22.3.2019</td>
            <td>8.4.2019</td>
          </tr>
          <tr>
            <td>Osa 12</td>
            <td>29.3.2019</td>
            <td>15.4.2019</td>
          </tr>
          <tr>
            <td>Osa 13</td>
            <td>12.4.2019</td>
            <td>29.4.2019</td>
          </tr>
          <tr>
            <td>Osa 14</td>
            <td>19.4.2019</td>
            <td>6.5.2019</td>
          </tr>
        </tbody>
      </table>

      <p>
        <b>
          Määräajat ovat aina maanantaisin. Määräaikojen kellonajat ovat aina
          23:59:00 – osan 1 tehtävät tulee palauttaa siis viimeistään 21.1.2019
          klo 23:59:00. Virallisena määräaikana käytetään tehtäväpalvelimen
          kelloa, joka on Suomen ajassa. Huomaa, että oman koneesi kello voi
          olla jäljessä tai edellä, joten älä jätä tehtävien tekemistä ja
          palauttamista viime hetkeen.
        </b>
      </p>

      <p>Haluan tietoa kun kurssi alkaa</p>
    </Layout>
  </Fragment>
)

export default IndexPage
