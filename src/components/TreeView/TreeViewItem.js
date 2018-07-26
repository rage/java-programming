import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const ChildrenList = styled.ul`
  max-height: var(--max-height);
  overflow: hidden;
`

const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  margin-bottom: 0;
  padding: 0.5rem;
`

const ItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
  }

  &.active-section {
    background-color: #ffdfdf;
    border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
    a {
      color: black;
    }
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 0.5rem;
`

export default class TreeViewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childrenVisible: props.item.childrenVisibleByDefault || false,
    }
  }

  onClick = () => {
    this.setState(prev => ({
      childrenVisible: !prev.childrenVisible,
    }))
  }
  render() {
    return (
      <React.Fragment>
        <ItemTitleWrapper
          className={`nav-item-${this.props.item.name
            .toLowerCase()
            .replace(/ /g, '-')}`}
        >
          {this.props.item.children && (
            <StyledIcon icon={faCaretRight} size="1x" />
          )}
          <a href={this.props.item.href}>
            <ListItem onClick={this.onClick}>{this.props.item.name}</ListItem>
          </a>
        </ItemTitleWrapper>
        {this.props.item.children && (
          <ChildrenList
            style={{
              '--max-height': this.state.childrenVisible ? '9999px' : '0',
            }}
          >
            {this.props.item.children.map(i => (
              <TreeViewItem key={i.name} item={i} />
            ))}
          </ChildrenList>
        )}
      </React.Fragment>
    )
  }
}
