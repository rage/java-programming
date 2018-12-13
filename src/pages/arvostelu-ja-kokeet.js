import React, { Fragment } from 'react'

import Layout from '../templates/Layout'
import Container from '../components/Container'
import { withLoginStateContext } from '../contexes/LoginStateContext'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

const IndexPage = () => (
  <Layout>
    <Container>
      <section id="yleistä">
        <h1>Arvostelu ja kokeet</h1>
        <p>
          Ohjelmoinnin MOOC sisältää Helsingin yliopiston kurssit Ohjelmoinnin perusteet (materiaalin osat 1-7) ja Ohjelmoinnin jatkokurssi (materiaalin osat 8-14). Kummastakin osasta saa erillisen arvosanan. Ohjelmoinnin MOOCista on kaksi versiota: aikataulutettu kurssi ja aikatauluttamaton kurssi. Näiden arvostelu poikkeaa hieman toisistaan. 
        </p>
        <h2>Aikataulutettu kurssi</h2>
        <p>
          Aikataulutetussa kurssissa arvostelu perustuu sekä tehtyihin tehtäviin että kahteen kokeeseen, jotka vastaavat kursseja Ohjelmoinnin perusteet ja Ohjelmoinnin jatkokurssi. 
        </p>
        <p>
          Ohjelmoinnin perusteita vastaava koe suoritetaan osien 1-7 jälkeen. Arvosanasta puolet muodostuu osien 1-7 tehdyistä tehtävistä ja puolet kokeesta. Täydet tehtäväpisteet kustakin osasta saa tekemällä osan tehtävistä vähintään 90%, puolet tekemällä noin 45% jne.
        </p>
        <p>
          Ohjelmoinnin jatkokurssia vastaava koe suoritetaan osien 8-14 jälkeen. Arvosanasta puolet muodostuu osien 8-14 tehdyistä tehtävistä ja puolet kokeesta. Täydet tehtäväpisteet kustakin osasta saa tekemällä osan tehtävistä vähintään 90%, puolet tekemällä noin 45% jne.
        </p>
        <h2>Aikatauluttamaton kurssi</h2>
        <p>
          Aikatauluttamattomassa kurssiversiossa arvostelu perustuu täysin kokeeseen. Kokeeseen saa osallistua kun on tehnyt jokaisen osan tehtävistä vähintään 90%. 
        </p>
        <p>
          Kurssin aikatauluttamaton versio julkaistaan aikataulutetun version ensimmäisen määräajan jälkeen (21.1.2019).
        </p>
        <h2>Arvosanan muodostuminen</h2>
        <p>
          Ohjelmoinnin MOOCista annetaan kaksi arvosanaa, jotka vastaavat kursseja Ohjelmoinnin perusteet ja Ohjelmoinnin jatkokurssi. Kumpikin arvostellaan seuraavalla asteikolla:
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
