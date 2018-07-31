import React from 'react'
import styled from 'styled-components'

import { Motion, spring } from 'react-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { trackElementHeight } from '../../util/trackHeight'

const ChildrenList = styled.ul`
  height: calc(var(--open-ratio) * var(--calculated-height) * 1px);
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
  margin-left: 0.5rem;
  transform: rotate(calc(var(--open-ratio) * 90deg));
`

export default class TreeViewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childrenVisible: props.item.childrenVisibleByDefault || false,
    }
    this.childrenListRef = React.createRef()
  }

  onClick = () => {
    this.setState(prev => ({
      childrenVisible: !prev.childrenVisible,
    }))
  }

  componentDidMount() {
    if (this.props.item.children) {
      console.log(this.childrenListRef.current)
      trackElementHeight(this.childrenListRef.current)
    }
  }
  render() {
    return (
      <React.Fragment>
        <Motion
          style={{ openRatio: spring(this.state.childrenVisible ? 1 : 0) }}
        >
          {({ openRatio }) => (
            <React.Fragment>
              <ItemTitleWrapper
                className={`nav-item-${this.props.item.name
                  .toLowerCase()
                  .replace(/ /g, '-')}`}
              >
                {this.props.item.children && (
                  <StyledIcon
                    style={{ '--open-ratio': `${openRatio}` }}
                    icon={faCaretRight}
                    size="1x"
                  />
                )}
                <a href={this.props.item.href}>
                  <ListItem onClick={this.onClick}>
                    {this.props.item.name}
                  </ListItem>
                </a>
              </ItemTitleWrapper>
              {this.props.item.children && (
                <ChildrenList
                  innerRef={this.childrenListRef}
                  style={{ '--open-ratio': `${openRatio}` }}
                >
                  {this.props.item.children.map(i => (
                    <TreeViewItem key={i.name} item={i} />
                  ))}
                </ChildrenList>
              )}
            </React.Fragment>
          )}
        </Motion>
      </React.Fragment>
    )
  }
}
