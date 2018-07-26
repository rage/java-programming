import React from 'react'
import TreeViewItem from './TreeViewItem'
import styled from 'styled-components'
import Scrollspy from 'react-scrollspy'

const StyledUl = styled.ul`
  margin-left: 0rem;
`

export default class TreeView extends React.Component {
  render() {
    return (
      <Scrollspy
        items={['yleistä', 'kurssin-kaksi-versiota', 'sisältö-ja-aikataulu']}
        currentClassName="is-current"
        onUpdate={element => {
          document
            .querySelectorAll('.active-section')
            .forEach(e => e.classList.remove('active-section'))
          const selector = element.id
          const current = document.querySelectorAll(`.nav-item-${selector}`)
          current.forEach(e => e.classList.add('active-section'))

        }}
      >
        <StyledUl>
          {this.props.data.map(top => <TreeViewItem key={top.name} item={top} spy />)}
        </StyledUl>
      </Scrollspy>
    )
  }
}
