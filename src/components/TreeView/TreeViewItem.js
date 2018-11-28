import React from 'react'
import styled from 'styled-components'

import { Motion, spring } from 'react-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { trackElementHeight } from '../../util/trackHeight'
import GatsbyLink from 'gatsby-link'
import { Location } from '@reach/router'

const ChildrenList = styled.ul`
  height: calc(var(--open-ratio) * var(--calculated-height) * 1px);
  overflow: hidden;
  margin-left: 0;
`

const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  margin-bottom: 0;
  padding: 0.75rem;

`

const NavigationLink = styled(GatsbyLink)`
  border-left: 0.5rem solid white;
  width: 100%;
  ${props => props.active === "t" && `
    border-color: #f75b4b;
    background-color: #ffeeed;
  `}

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
      trackElementHeight(this.childrenListRef.current)
    }
  }
  render() {
    return (
      <React.Fragment>
        <Location>
          {({ navigate, location }) => (
            <Motion
              style={{
                openRatio: spring(this.state.childrenVisible ? 1 : 0),
              }}
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
                    <NavigationLink
                      to={this.props.item.href}
                      active={
                        (this.props.item.href === location.pathname || this.props.item.href === location.pathname.slice(0, -1)) ? 't' : 'f'
                      }
                    >
                      <ListItem onClick={this.onClick}>
                        {this.props.item.name}
                      </ListItem>
                    </NavigationLink>
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
          )}
        </Location>
      </React.Fragment>
    )
  }
}
