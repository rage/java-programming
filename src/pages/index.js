import React from "react"

import Layout from "../templates/Layout"
import Banner from "../components/Banner"
import GatsbyLink from "gatsby-link"
import { Link } from "gatsby"
import { withLoginStateContext } from "../contexes/LoginStateContext"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import Container from "../components/Container"

const IndexPage = () => (
  <Layout>
    <Banner />
    <Container>
      <section id="yleistä">
        <h1>Tietoa kurssista</h1>
        <p>
          Ohjelmoinnin MOOC on kaikille avoin ja ilmainen ohjelmoinnin perusteet
          opettava verkkokurssi. Kurssilla perehdytään nykyaikaisen ohjelmoinnin
          perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi
          algoritmien laatimiseen. Kurssille osallistuminen ei vaadi
          ennakkotietoja ohjelmoinnista.
        </p>
        <p>
          Ohjelmoinnin MOOC vastaa sisällöltään Helsingin yliopiston
          tietojenkäsittelytieteen laitoksen kursseja Ohjelmoinnin perusteet ja
          Ohjelmoinnin jatkokurssi. Kurssit vastaavat yhteensä kymmentä
          opintopistettä (5+5).
        </p>
        <p>
          <b>Kurssi on käynnissä!</b> Luo tunnus tai kirjaudu sisään, jonka
          jälkeen valitse <Link to="/osa-1">Osa 1</Link> navigaatiosta.
        </p>
      </section>

      <section id="kurssin-kaksi-versiota">
        <h2>Sisältö ja kurssin versiot</h2>
        <p>
          Kurssi koostuu 14 tehtäväsarjasta. Kunkin tehtäväsarjan tekemiseen
          kannattaa varata aikaa noin 5-20 tuntia. Varaamme oikeuden aikataulun
          ja aiheiden muutoksiin, kuitenkin niin, että jokaista tehtäväsarjaa on
          mahdollista suorittaa vähintään kahden viikon ajan.
        </p>
        <p>
          Kurssista on kaksi versiota: aikataulutettu versio, jossa on
          viikoittaiset deadlinet ja aikatauluton versio, jossa tehtäviä voi
          tehdä täysin omaan tahtiin. Aikatauluttoman kurssin tehtävät
          julkaistaan aina aikataulutetun kurssin jälkeen. Voit siirtyä
          aikataululliselta kurssilta aikatauluttomaan mikäli niin haluat.
          Kurssin vaihtaminen toiseen suuntaan ei ole mahdollista. Huomaa
          kuitenkin että aikatauluttomasta versiosta ei voi hakea
          opinto-oikeutta.
        </p>
        <p>
          Kurssin osat 1-7 vastaavat kurssia Ohjelmoinnin perusteet. Osat 8-14
          vastaavat kurssia Ohjelmoinnin jatkokurssi.
        </p>
      </section>

      <section id="sisältö-ja-aikataulu">
        <h3>Aikataulu - kesä 2019</h3>

        <p>
          Kesän 2019 aikataulutetussa Ohjelmoinnin MOOCissa kurssimateriaali on
          kokonaisuudessaan saatavilla kurssin alusta lähtien. Tämä mahdollistaa
          kurssin tekemisen nopeammalla tahdilla, mikäli niin haluaa tehdä.
          Normaalissa kesän aikataulussa kunkin osan tekemiseen on noin viikko.
          Ensimmäisen osan tehtävät tulee palauttaa 20.5. klo 23:59:00 mennessä.
        </p>

        <p>
          Mikäli olet tekemässä Kesän aikataulutettua versiota kurssista
          (Ohjelmoinnin perusteet), valitse kurssin profiilista kohdasta "Minkä
          kurssin version pisteet, deadlinet ja kolikot haluat nähdä."
          vaihtoehto "Kesän aikataulutettu Ohjelmoinnin MOOC"
        </p>

        <p>
          Huom! Voit tehdä myös kesällä aikataulutonta versiota kurssista.
          Valitse tällöin kurssin profiilista kohdasta "Minkä kurssin version
          pisteet, deadlinet ja kolikot haluat nähdä." vaihtoehto "Aikatauluton
          ohjelmoinnin MOOC". Lisäksi valitse sama kurssi kun aloitat
          ohjelmoimaan NetBeanssissa. Tälloin voit tehdä kutakin osaa vuoden
          loppuun asti.
        </p>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Aikataulu</TableCell>
              <TableCell>Deadline</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Osa 1</TableCell>
              <TableCell>20.5.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 2</TableCell>
              <TableCell>24.5.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 3</TableCell>
              <TableCell>27.5.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 4</TableCell>
              <TableCell>3.6.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 5</TableCell>
              <TableCell>10.6.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 6</TableCell>
              <TableCell>17.6.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 7</TableCell>
              <TableCell>24.6.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 8</TableCell>
              <TableCell>8.7.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 9</TableCell>
              <TableCell>15.7.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 10</TableCell>
              <TableCell>22.7.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 11</TableCell>
              <TableCell>29.7.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 12</TableCell>
              <TableCell>5.8.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 13</TableCell>
              <TableCell>12.8.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 14</TableCell>
              <TableCell>19.8.2019</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          <b>
            Määräajat ovat aina maanantaisin. Määräaikojen kellonajat ovat aina
            23:59:00 – osan 1 tehtävät tulee palauttaa siis viimeistään
            <s>13.5.2019</s> 20.5.2019 klo 23:59:00. Virallisena määräaikana
            käytetään tehtäväpalvelimen kelloa, joka on Suomen ajassa. Huomaa,
            että oman koneesi kello voi olla jäljessä tai edellä, joten älä jätä
            tehtävien tekemistä ja palauttamista viime hetkeen.
          </b>
        </p>

        <p>
          <b>
            (Edit 13.5.) 1. ja 2. osan määräaikoja on pidennetty (13.5. ->
            20.5.),(20.5. -> 24.5.).
          </b>
        </p>
      </section>

      <section id="sisältö-ja-aikataulu-kevat-2019">
        <h3>Aikataulu - kevät 2019</h3>
        <p>
          Keväisin tarjottava Ohjelmoinnin MOOC tarjoaa mahdollisuuden
          opinto-oikeuteen tietojenkäsittelytieteen opintoihin Helsingin
          yliopistolla. Mikäli haet kurssin kautta opinto-oikeutta, lue kaikki
          opinto-oikeuden hakemiseen liittyvät tiedot huolellisesti. Esimerkiksi
          tehtävien aikarajoista EI voida joustaa lainkaan. Ehdot
          opinto-oikeuden saamiseksi päivittyvät lähempänä yhteishakua.
          Lisätietoa opinto-oikeudesta saat{" "}
          <GatsbyLink to="/opinto-oikeus">täältä</GatsbyLink>.
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Aikataulu</TableCell>
              <TableCell>Julkaisu</TableCell>
              <TableCell>Deadline</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Osa 1</TableCell>
              <TableCell>14.12.2018</TableCell>
              <TableCell>21.1.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 2</TableCell>
              <TableCell>28.12.2018</TableCell>
              <TableCell>28.1.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 3</TableCell>
              <TableCell>11.1.2019</TableCell>
              <TableCell>4.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 4</TableCell>
              <TableCell>25.1.2019</TableCell>
              <TableCell>11.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 5</TableCell>
              <TableCell>1.2.2019</TableCell>
              <TableCell>18.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 6</TableCell>
              <TableCell>8.2.2019</TableCell>
              <TableCell>25.2.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 7</TableCell>
              <TableCell>15.2.2019</TableCell>
              <TableCell>4.3.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 8</TableCell>
              <TableCell>1.3.2019</TableCell>
              <TableCell>18.3.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 9</TableCell>
              <TableCell>8.3.2019</TableCell>
              <TableCell>25.3.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 10</TableCell>
              <TableCell>15.3.2019</TableCell>
              <TableCell>1.4.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 11</TableCell>
              <TableCell>22.3.2019</TableCell>
              <TableCell>8.4.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 12</TableCell>
              <TableCell>29.3.2019</TableCell>
              <TableCell>15.4.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 13</TableCell>
              <TableCell>12.4.2019</TableCell>
              <TableCell>29.4.2019</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Osa 14</TableCell>
              <TableCell>19.4.2019</TableCell>
              <TableCell>6.5.2019</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p>
          <b>
            Määräajat ovat aina maanantaisin. Määräaikojen kellonajat ovat aina
            23:59:00 – osan 1 tehtävät tulee palauttaa siis viimeistään
            21.1.2019 klo 23:59:00. Virallisena määräaikana käytetään
            tehtäväpalvelimen kelloa, joka on Suomen ajassa. Huomaa, että oman
            koneesi kello voi olla jäljessä tai edellä, joten älä jätä tehtävien
            tekemistä ja palauttamista viime hetkeen.
          </b>
        </p>
      </section>

      <section id="ilmoittautuminen">
        <h2>Ilmoittautuminen</h2>

        <p>
          Kurssille ei tarvitse eikä voi ilmoittautua. Ilmoittautuneiksi
          katsotaan ne osallistujat, jotka tekevät kurssin ohjelmointitehtäviä.
        </p>
      </section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
