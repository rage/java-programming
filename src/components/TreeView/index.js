import React from "react"
import TreeViewItem from "./TreeViewItem"
import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"

const StyledUl = styled.ul`
  margin-left: 0;
  margin-top: 0.5em;
  padding-left: 0;
`

class TreeView extends React.Component {
  render() {
    return (
      <StyledUl>
        {this.props.data.map((top) => (
          <TreeViewItem key={top.title} item={top} spy />
        ))}
      </StyledUl>
    )
  }
}

export default withSimpleErrorBoundary(TreeView)
