import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import TreeView from './TreeView'

const StyledIcon = styled(FontAwesomeIcon)`
  //color: rgba(0, 0, 0, 0.54);
`

export const SIDEBAR_WIDTH = '20rem'

const SidebarContainer = styled.div`
  height: 100vh;
  width: ${SIDEBAR_WIDTH};
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;
  //border-right: 5px solid #fb8b8b;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

`

const TopContainer = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`


const content2 = [
  {
    name: 'Tietoa kurssista',
    href: '/'
  },
  {
    name: 'Mahdollisuus opinto-oikeuteen',
    href: '/opinto-oikeus'
  },
  {
    name: 'Opettajille ja opinto-ohjaajille',
    href: '/opettajille'
  }
]

export default class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <TopContainer>
          <Logo />
          <StyledIcon icon={faArrowAltCircleLeft} size="2x" />
        </TopContainer>
        <TreeView data={content2} />
        {/* <ul>
          <li>Johdanto</li>
          <ul>
            <li>Alkusanat</li>
            <li>Kurssin kaksi versiota</li>
            <li>Sisältö ja aikataulu</li>
            <li>Muistuta minua kun kurssi alkaa</li>
          </ul>
          <li>Osa 1 -- Ensiaskeleet</li>
          <ul>
            <li>Ohjelma ja lähdekoodi</li>
            <ul>
              <li>Ohjelmarunko</li>
              <li>Ohjelman osia</li>
              <ul>
                <li>Kommentit</li>
                <li>Tulostaminen</li>
                <li>Komennon parametrit</li>
                <li>Puolipiste</li>
                <li>Lohko</li>
              </ul>
              <li>Ohjelmointityylistä</li>
            </ul>
            <li>Ohjelma ja tieto</li>
            <ul>
              <li>Tiedon tyyppi</li>
              <li>Muuttujan esittely</li>
              <li>Muuttujaan asetetun arvon muuttaminen</li>
              <li>Muuttujan tyyppi pysyy</li>
              <li>Muuttujan nimentä</li>
              <ul>
                <li>Sallittuja muuttujien nimiä</li>
                <li>Virheellisiä muuttujien nimiä</li>
              </ul>
            </ul>
            <li>Tietokone on laskin</li>
            <ul>
              <li>Laskentaaa</li>
              <li>Laskukärjestys ja sulut</li>
              <li>Laskentaa ja tulostamista</li>
              <li>Jakolasku</li>
              <li>Muuttujan arvoon liittyviä väärinkäsityksiä</li>
            </ul>
            <li>Käyttäjän syötteen lukeminen</li>
          </ul>
          <li>Osa 2 -- Metodit</li>
        </ul> */}
      </SidebarContainer>
    )
  }
}
