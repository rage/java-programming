import React from "react"
import Helmet from "react-helmet"

import Layout from "../templates/Layout"
import Container from "../components/Container"
import { withLoginStateContext } from "../contexes/LoginStateContext"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <Container>
      <Helmet title="Arvostelu ja kokeet" />
      <section id="yleistä">
        <h1>Arvostelu ja kokeet</h1>
        <p>
          Ohjelmoinnin MOOC sisältää Helsingin yliopiston kurssit Ohjelmoinnin
          perusteet (materiaalin osat 1-7) ja Ohjelmoinnin jatkokurssi
          (materiaalin osat 8-14). Kummastakin osasta järjestetään verkossa
          tehtävä koe, ja kummastakin osasta saa erillisen arvosanan.
          Ohjelmoinnin MOOCista on kaksi versiota: aikataulutettu kurssi ja
          aikatauluttamaton kurssi. Näiden arvostelu poikkeaa hieman toisistaan.
        </p>
        <h2>Aikataulutettu kurssi</h2>
        <p>
          Aikataulutetussa kurssissa arvostelu perustuu sekä tehtyihin tehtäviin
          (50% kokonaispisteistä) että kokeeseen (50% kokonaispisteistä).
        </p>
        <p>
          Ohjelmoinnin perusteita vastaava koe suoritetaan materiaalin osien 1-7
          jälkeen. Arvosanasta puolet muodostuu osien 1-7 tehdyistä tehtävistä
          ja puolet kokeesta. Osien 1-7 kokeita järjestetään 5.3., 14.4., ja
          8.5.
        </p>
        <p>
          Ohjelmoinnin jatkokurssia vastaava koe suoritetaan materiaalin osien
          8-14 jälkeen. Arvosanasta puolet muodostuu osien 8-14 tehdyistä
          tehtävistä ja puolet kokeesta. Osien 8-14 kokeita järjestetään 8.5.,
          8.6., ja 29.6.
        </p>
        <p>
          Täydet tehtäväpisteet kustakin osasta saa tekemällä osan kaikkien
          tehtävien pisteistä vähintään 90%, puolet tekemällä noin 45% jne.
        </p>
        <p>
          Kokeeseen saa osallistua kun on tehnyt vähintään 25% jokaisen osan
          tehtävien pisteistä. Aikatauluttamattomassa kurssissa kokeesta tulee
          saada vähintään puolet kurssin pisteistä kurssin läpäiseksi.
        </p>
        <h2>Aikatauluttamaton kurssi</h2>
        <p>
          Aikatauluttamattomassa kurssiversiossa arvostelu perustuu täysin
          kokeeseen. Kokeeseen saa osallistua kun on tehnyt jokaisen osan
          tehtävien pisteistä vähintään 90%.
        </p>
        <p>
          Kurssin aikatauluttamaton versio julkaistaan aikataulutetun version
          ensimmäisen määräajan jälkeen (21.1.2019). Aikatauluttamattoman
          kurssin koeaikataulu julkaistaan myöhemmin.
        </p>
        <h2>Arvosanan muodostuminen</h2>
        <p>
          Ohjelmoinnin MOOCista annetaan kaksi arvosanaa, jotka vastaavat
          kursseja Ohjelmoinnin perusteet ja Ohjelmoinnin jatkokurssi. Kumpikin
          arvostellaan seuraavalla asteikolla:
        </p>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pisteet</TableCell>
              <TableCell>Arvosana</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>90% tai yli</TableCell>
              <TableCell>5 (erinomainen)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>80% tai yli, alle 90%</TableCell>
              <TableCell>4 (kiitettävä)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>70% tai yli, alle 80%</TableCell>
              <TableCell>3 (hyvä)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>60% tai yli, alle 70%</TableCell>
              <TableCell>2 (tyydyttävä)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>50% tai yli, alle 60%</TableCell>
              <TableCell>1 (välttävä)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>alle 50%</TableCell>
              <TableCell>hylätty</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
