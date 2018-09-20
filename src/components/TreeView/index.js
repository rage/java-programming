import React from 'react'
import TreeViewItem from './TreeViewItem'
import styled from 'styled-components'

const StyledUl = styled.ul`
  margin-left: 0;
`

export default class TreeView extends React.Component {
  render() {
    return (
      <StyledUl>
        {this.props.data.map(top => (
          <TreeViewItem key={top.name} item={top} spy />
        ))}
      </StyledUl>
    )
  }
}
