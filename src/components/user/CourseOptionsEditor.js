import React from 'react'
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'

import styled from 'styled-components'

const Row = styled.div`
  margin-bottom: 1.5rem;
`

const Form = styled.form``

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

class CourseOptionsEditor extends React.Component {
  onClick = async e => {
    e.preventDefault()
    this.props.onComplete()
  }

  state = {
    email: undefined,
    password: undefined,
    submitting: false,
    error: false,
  }

  render() {
    return (
      <FormContainer>
        <h1>Opiskelijan tiedot</h1>
        <Form>
          <InfoBox>
            Kerro meille itsestäsi. Nämä tiedot auttavat meitä suoritusten
            merkitsemisessä ja kurssin järjestämisessä. Voit muokata näitä
            tietoja myöhemmin kurssin asetuksista.
          </InfoBox>

          <Row>
            <TextField
              variant="outlined"
              type="text"
              label="Etunimi"
              fullWidth
              value={this.state.first_name}
              onChange={o => this.setState({ first_name: o.target.value })}
            />
          </Row>

          <Row>
            <TextField
              variant="outlined"
              type="text"
              label="Sukunimi"
              fullWidth
              value={this.state.last_name}
              onChange={o => this.setState({ last_name: o.target.value })}
            />
          </Row>

          <Row>
            <TextField
              variant="outlined"
              type="text"
              label="Helsingin yliopiston opiskelijanumero"
              fullWidth
              value={this.state.student_number}
              onChange={o => this.setState({ student_number: o.target.value })}
            />
          </Row>

          <Row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.applying}
                  onChange={o => this.setState({ applying: o.target.value })}
                  value="aion hakea"
                />
              }
              label="Aion hakea kurssin kautta opinto-oikeutta Helsingin yliopiston tietojenkäsittelytieteen osastolle"
            />
          </Row>

          <Row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.marketing}
                  onChange={o => this.setState({ marketing: o.target.value })}
                  value="1"
                />
              }
              label="Haluan tietoa uusista kursseista"
            />
          </Row>

          <h2>Kurssilla tehtävästä tutkimuksesta</h2>

          <p>
            Kurssilla tehdään oppimiseen liittyvää tutkimusta. Tällä
            tutkimuksella on useampia tavoitteita:
          </p>

          <ol>
            <li>
              luoda oppimateriaali, joka ottaa yksilölliset erot huomioon ja
              reagoi tarvittaessa tarjoten kohdennetumpaa oppisisältöä
            </li>
            <li>
              kehittää digitaalisissa ympäristöissä tapahtuvaan oppimiseen
              liittyvää ymmärrystä ja tietoa, sekä
            </li>
            <li>
              tukea tutkimustiedon kautta muita oppimateriaalien kehittäjiä ja
              oppimisen tutkijoita. Tämä johtaa luonnollisesti myös parempaan
              oppimiskokemukseen opiskelijoille.
            </li>
          </ol>

          <p>
            Tällaisesta oppimisanalytiikaksi kutsutusta tutkimuksesta
            kiinnostuneiden kannattaa tutustua esimerkiksi artikkeliin
            {' '}<a href="https://dl.acm.org/citation.cfm?id=2858798" target="_blank" rel="noopener noreferrer">Educational Data Mining and Learning Analytics in Programming:
            Literature Review and Case Studies</a>.
          </p>

          <p>
            Tutkimusdatan hallinnasta vastaa Helsingin yliopiston
            tietojenkäsittelytieteen laitoksen Agile Education Research -ryhmän
            Arto Hellas. Anonymisoimattomaan tutkimusdataan eivät pääse käsiksi
            muut tutkijat. Voit myös pyytää milloin tahansa sinusta kerätyn
            datan poistamista lähettämällä sähköpostin osoitteeseen
            arto.hellas@cs.helsinki.fi
          </p>

          <p>
            Työskentelystä kerättyä tietoa käytetään tutkimuksessa. Kerätty
            tieto sisältää tietoa oppimateriaalien käytöstä, kurssitehtävien
            tekemisestä sekä kokeissa pärjäämisestä. Tutkimustuloksista ei
            pystytä tunnistamaan yksittäisiä opiskelijoita. Jos et osallistu
            tutkimukseen, siitä ei tule minkäänlaisia seuraamuksia.
          </p>

          <Row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.research}
                  onChange={o => this.setState({ research: o.target.value })}
                  value="1"
                />
              }
              label="Osallistun oppimiseen liittyvään tutkimukseen. Valitsemalla tämän autat sekä nykyisiä että tulevia opiskelijoita."
            />
          </Row>

          <Row>
            <Button
              onClick={this.onClick}
              disabled={this.state.submitting}
              variant="contained"
              color="primary"
              fullWidth
            >
              Tallenna
            </Button>
          </Row>
        </Form>
        {this.state.error && (
          <InfoBox>
            <b>Invalid credentials</b>
          </InfoBox>
        )}
      </FormContainer>
    )
  }
}

export default CourseOptionsEditor
