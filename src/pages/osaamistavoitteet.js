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
        <h1>Osaamistavoitteet</h1>
        <p>
          Ohjelmoinnin MOOCissa opit perustaidot ohjelmoinnista Java-kielellä.
          Ohjelmoinnin MOOC sisältää kurssit Ohjelmoinnin perusteet (materiaalin
          osat 1-7) ja Ohjelmoinnin jatkokurssi (materiaalin osat 8-14).
          Osakohtaiset osaamistavoitteet ovat seuraavat.
        </p>

        <h2>Ohjelmoinnin perusteet</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Osa</TableCell>
              <TableCell>Osaamistavoitteet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                Osaat kirjoittaa ohjelmia, jotka lukevat käyttäjältä syötettä ja
                tekevät laskentaa syötteen perusteella. Tunnet käsitteet
                muuttuja, ehtolause ja toistolause, ja osaat käyttää näitä
                ohjelmissasi.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>
                Tunnet muutamia osaongelmia sekä niihin liittyviä
                ratkaisumalleja. Tunnet loogiset operaatiot ja, tai ja ei ja
                osaat käyttää niitä ehto- ja toistolauseissa. Tunnet käsitteet
                metodi, metodin parametri, metodin palautusarvo ja ohjelman
                kutsupino. Osaat luoda metodeja ja ymmärrät miten ohjelman
                suoritus etenee kun metodia kutsutaan ja toisaalta kun
                metodikutsusta palataan.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>
                Tiedät lähdekoodin kommentointitapoja ja ymmärrät miten
                muuttujien ja metodien nimentä vaikuttaa ohjelman
                ymmärrettävyyteen. Tunnet lista- ja taulukkorakenteen ja osaat
                käyttää niitä osana ohjelmia. Osaat käydä listan ja taulukon
                läpi while-toistolausetta ja indeksimuuttujaa käyttäen sekä
                for-each -toistolausetta käyttäen. Tunnet merkkijonoon liittyviä
                metodeja ja osaat pilkkoa merkkijonon pienempiin osiin.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>
                Tunnet käsitteet tiedosto ja tiedostojärjestelmä ja osaat lukea
                merkkijonomuotoista tietoa tiedostosta. Tiedät mitä
                olio-ohjelmointi tarkoittaa. Tunnet olio-ohjelmointiin liittyvät
                keskeiset käsitteet kuten luokka ja olio. Osaat luoda luokkia ja
                olioita sekä käyttää niitä osana toteuttamiasi ohjelmia.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>
                Tiedät mitä alkeis- ja viittaustyyppiset muuttujat ovat ja
                ymmärrät miten niiden toiminta eroaa toisistaan (muuttujan arvon
                asetus, metodin parametrina käyttö). Osaat luoda luokkaan useita
                konstruktoreja sekä useita samannimisiä metodeja. Osaat
                vertailla olioiden samankaltaisuutta sekä määritellä
                samankaltaisuuden vertailuun käytettävän metodin. Osaat
                määritellä luokkaan viittaustyyppisiä oliomuuttujia, käyttää
                olioita metodin paluuarvona, sekä käyttää listoja
                oliomuuttujina.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>
                Ymmärrät staattisten ja ei-staattisten metodien erot. Tunnet
                hajautustaulun ja osaat käsitellä hajautustaulussa olevaa
                tietoa. Osaat käyttää olioita hajautustaulun arvona ja tiedät
                miten oliot toimivat hajautustaulun avaimena. Osaat ryhmitellä
                tietoa hajautustaulun avulla ja osaat käyttää listaa
                hajautustaulun arvona. Osaat käyttää olioita sekä tiedon
                esittämiseen että ohjelman jakamiseen useampaan vastuualueeseen
                (tekstikäyttöliittymä, sovelluslogiikka).
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>
                Osaat kertoa proseduraalisen ohjelmoinnin ja olio-ohjelmoinnin
                eroista ja toteuttaa ohjelmia kumpaakin ohjelmointiparadigmaa
                noudattaen. Tiedät mitä käsite algoritmi tarkoittaa ja osaat
                kuvailla muutamien järjestämis- ja hakualgoritmien toimintaa.
                Osaat kirjoittaa yksikkötestejä ja tiedät testivetoisen
                ohjelmistokehityksen perusaskeleet.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2>Ohjelmoinnin jatkokurssi</h2>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Osa</TableCell>
              <TableCell>Osaamistavoitteet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>8</TableCell>
              <TableCell>
                Tunnet käsitteet perintä ja rajapinta. Osaat luoda luokkia,
                jotka periytyvät toisesta luokasta ja osaat luoda luokkia, jotka
                toteuttavat yhden tai useamman rajapinnan. Tiedät miten
                abstraktit luokat toimivat. Ymmärrät että olio voidaan esittää
                kaikkien sen todellisten tyyppien avulla.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9</TableCell>
              <TableCell>
                Osaat käsitellä tietokokoelmia virran avulla. Osaat rajata
                virran arvoja (filter) sekä muuntaa virran arvojen tyyppiä
                (map). Tunnet käsitteen lambda-lauseke. Osaat järjestää olioita
                Javan valmista Comparable-rajapintaa hyödyntäen. Tunnet
                käsitteet säännöllinen lauseke, lueteltu tyyppi, ja iteraattori,
                ja osaat hyödyntää näitä ohjelmissasi.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10</TableCell>
              <TableCell>
                Tunnet luokkakaaviot ja osaat tulkita ja rakentaa ohjelmia
                luokkakaavioiden perusteella. Osaat käyttää Javan pakkauksia ja
                tiedät mistä import-lauseen osat muodostuvat. Tunnet Javan
                erilaisia poikkeuksia ja osaat käsitellä sekä heittää niitä
                eteenpäin. Osaat kirjoittaa tietoa tiedostoon ohjelmallisesti.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>11</TableCell>
              <TableCell>
                Tiedät mitä geneeriset tyyppiparametrit ovat ja osaat luoda
                luokkia jotka käyttävät niitä. Tiedät pääpiirteittäin
                ArrayListin ja HashMapin sisäisen toteutuksen ja osaat luoda
                niistä yksinkertaistetut omat versiot. Tiedät miten
                satunnaislukuja luodaan ja osaat käyttää Javan valmiita
                välineitä satunnaislukujen luomiseen. Tunnet menetelmiä
                moniulotteisen tiedon esittämiseen ja osaat luoda sekä käsitellä
                moniulotteisia taulukoita.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12</TableCell>
              <TableCell>
                Tutustut graafisten käyttöliittymien ohjelmointiin. Tunnet
                muutamia käyttöliittymäkomponentteja,
                käyttöliittymäkomponenttien asettelun mekanismeja, sekä osaat
                käsitellä käyttöliittymän tapahtumia. Osaat tehdä
                käyttöliittymiä, jotka sisältävät useamman näkymän.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>13</TableCell>
              <TableCell>
                Tunnet menetelmiä tiedon visualisointiin ja osaat käyttää Javan
                valmiiksi tarjoamia kaavioita (viivakaavio, pylväskaavio). Osaat
                käyttää Javan tarjoamia välineitä yksinkertaisten piirrosten
                luomiseen. Osaat näyttää kuvia sekä soittaa äänitiedostoja. Luot
                suuremman ohjelman esimerkkiä noudattaen.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>14</TableCell>
              <TableCell>
                Tunnet menetelmiä simulaatioiden luomiseen ja kertaat
                kaksiulotteisten taulukkojen käyttöä. Tiedät, että muiden
                kirjoittamia kirjastoja voi käyttää osana omia ohjemia. Kertaat
                käsitettä yksikkötesti ja tunnet pääpiirteittäin käsitteen
                testikattavuus.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
