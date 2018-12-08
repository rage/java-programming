import React from 'react'
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from '@material-ui/core'

import Loading from '../Loading'

import { updateUserDetails, userDetails } from '../../services/moocfi'

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
  async componentDidMount() {
    const data = await userDetails()
    console.log('Got saved state: ', JSON.stringify(data))
    this.setState(
      {
        first_name: data.user_field?.first_name,
        last_name: data.user_field?.last_name,
        student_number: data.user_field?.organizational_id,
        applies_for_study_right: data.extra_fields?.applies_for_study_right,
        digital_education_for_all: data.extra_fields?.digital_education_for_all,
        marketing: data.extra_fields?.marketing,
        research: data.extra_fields?.research,
        loading: false,
      },
      () => {
        this.validate()
      }
    )
  }

  onClick = async e => {
    e.preventDefault()
    const extraFields = {
      applies_for_study_right: this.state.applies_for_study_right,
      digital_education_for_all: this.state.digital_education_for_all,
      marketing: this.state.marketing,
      research: this.state.research,
    }
    const userField = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      organizational_id: this.state.student_number,
    }
    await updateUserDetails({
      extraFields,
      userField,
    })
    this.props.onComplete()
  }

  state = {
    submitting: false,
    error: true,
    errorObj: {},
    applies_for_study_right: false,
    digital_education_for_all: false,
    marketing: false,
    research: undefined,
    first_name: undefined,
    last_name: undefined,
    student_number: undefined,
    loading: true,
  }

  handleInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validate()
    })
  }

  handleCheckboxInput = e => {
    const name = e.target.name
    const value = e.target.checked
    this.setState({ [name]: value }, () => {
      this.validate()
    })
  }

  validate = () => {
    this.setState(prev => ({
      error: prev.research === undefined,
    }))
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <FormContainer>
        <h1>Opiskelijan tiedot</h1>
        <Form>
          <InfoBox>
            Kerro meille itsestäsi. Nämä tiedot auttavat meitä suoritusten
            merkitsemisessä ja kurssin järjestämisessä. Voit muokata näitä
            tietoja myöhemmin kurssin asetuksista. Tietojen täyttämisen jälkeen
            paina "Tallenna" sivun alareunasta.
          </InfoBox>

          <Row>
            <TextField
              variant="outlined"
              type="text"
              label="Etunimi"
              autoComplete="given-name"
              name="first_name"
              InputLabelProps={{ shrink: this.state.first_name }}
              fullWidth
              value={this.state.first_name}
              onChange={this.handleInput}
            />
          </Row>

          <Row>
            <TextField
              variant="outlined"
              type="text"
              label="Sukunimi"
              autoComplete="family-name"
              name="last_name"
              InputLabelProps={{ shrink: this.state.last_name }}
              fullWidth
              value={this.state.last_name}
              onChange={this.handleInput}
            />
          </Row>

          <Row>
            <TextField
              variant="outlined"
              type="text"
              label="Helsingin yliopiston opiskelijanumero"
              name="student_number"
              InputLabelProps={{ shrink: this.state.student_number }}
              fullWidth
              value={this.state.student_number}
              onChange={this.handleInput}
              helperText="Jätä tyhjäksi, jos et ole tällä hetkellä Helsingin yliopiston opiskelija."
            />
          </Row>

          <Row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.applies_for_study_right}
                  onChange={this.handleCheckboxInput}
                  name="applies_for_study_right"
                  value="1"
                />
              }
              label="Aion hakea kurssin kautta opinto-oikeutta Helsingin yliopiston tietojenkäsittelytieteen osastolle. (Ei koske Digital Education for All -hankkeen tai Avoimen väylän kautta hakevia, vaan vain kurssin sivulla mainitun Ohjelmoinnin MOOCin hakuväylän kautta hakevia (meillä on monta sisääntuloväylää, sori siitä 😎) )"
            />
          </Row>

          <Row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.digital_education_for_all}
                  onChange={this.handleCheckboxInput}
                  name="digital_education_for_all"
                  value="1"
                />
              }
              label="Olen tällä hetkellä opiskelija Digital Education for All -hankkeessa (Älä valitse, jos et ole kuullut aikaisemmin)"
            />
          </Row>

          <Row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.marketing}
                  onChange={this.handleCheckboxInput}
                  name="marketing"
                  value="1"
                />
              }
              label="Minulle voi lähettää tietoa uusista kursseista"
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
            kiinnostuneiden kannattaa tutustua esimerkiksi artikkeliin{' '}
            <a
              href="https://dl.acm.org/citation.cfm?id=2858798"
              target="_blank"
              rel="noopener noreferrer"
            >
              Educational Data Mining and Learning Analytics in Programming:
              Literature Review and Case Studies
            </a>
            .
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
            <RadioGroup
              aria-label="Tutkimukseen osallistuminen"
              name="research"
              value={this.state.research}
              onChange={this.handleInput}
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="Osallistun oppimiseen liittyvään tutkimukseen. Valitsemalla tämän autat sekä nykyisiä että tulevia opiskelijoita."
              />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label="En osallistu oppimiseen liittyvään tutkimukseen."
              />
            </RadioGroup>
          </Row>

          <Row>
            <Button
              onClick={this.onClick}
              disabled={this.state.submitting || this.state.error}
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
            <b>Täytä vaaditut kentät.</b>
          </InfoBox>
        )}
      </FormContainer>
    )
  }
}

export default CourseOptionsEditor
