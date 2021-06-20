import React from "react"
import styled from "styled-components"

import { Motion, spring } from "react-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { trackElementHeight } from "../../util/trackHeight"
import GatsbyLink from "gatsby-link"
import { Location } from "@reach/router"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"

import { faCalendarAlt as icon } from "@fortawesome/free-regular-svg-icons"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"

const ChildrenList = styled.ul`
  height: calc(var(--open-ratio) * var(--calculated-height) * 1px);
  overflow: hidden;
  margin-left: 0;
`

const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 0;
  padding: 0.75em;
  display: flex;
  align-items: center;
`

const ListItemLabel = styled.div`
  flex: 1;
  padding: 0.3em;
`

const NavigationLink = styled(GatsbyLink)`
  border-left: 0.5em solid white;
  width: 100%;
  background-color: white;
  ${props =>
      props.active === "t" &&
      `
    border-color: #f75b4b !important;
    background-color: #edeaea;
  `}
    :hover {
    text-decoration: none;
    color: black;
    background-color: #f5ebeb;
    border-color: #f5ebeb;
    //filter: brightness(0.5);
  }
`

const DisabledItem = styled.div`
  opacity: 0.5;
  width: 100%;
  cursor: default !important;
  border-left: 0.5em solid white;
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
  margin-right: 0.5em;
  margin-left: 0.5em;
  transform: rotate(calc(var(--open-ratio) * 90deg));
`

const StyledChip = styled(Chip)`
  span {
    width: 6em;
  }
`

const StyledDivider = styled(Divider)`
  margin: 1em 16px !important;
`

const Centered = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`

class TreeViewItem extends React.Component {
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
    if (this.props.item.separator) {
      return (
        <Centered>
          <StyledDivider />
          <b>{this.props.item.title}</b>
        </Centered>
      )
    }
    return (
      <React.Fragment>
        <Location>
          {({ navigate, location }) => {
            let active =
              location.pathname === this.props.item.path ||
              location.pathname.includes(this.props.item.path + "/")
            if (this.props.item.path === "/") {
              active = location.pathname === this.props.item.path
            }
            return (
              <Motion
                style={{
                  openRatio: spring(this.state.childrenVisible ? 1 : 0),
                }}
              >
                {({ openRatio }) => (
                  <React.Fragment>
                    <ItemTitleWrapper
                      className={`nav-item-${this.props.item.title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {this.props.item.children && (
                        <StyledIcon
                          style={{ "--open-ratio": `${openRatio}` }}
                          icon={faCaretRight}
                          size="1x"
                        />
                      )}
                      <LinkWrapper
                        to={this.props.item.path || "#"}
                        active={active ? "t" : "f"}
                        disabled={this.props.item.tba}
                      >
                        <ListItem onClick={this.onClick}>
                          <ListItemLabel>{this.props.item.title}</ListItemLabel>
                          {this.props.item.tba && (
                            <StyledChip
                              avatar={
                                <Avatar>
                                  <FontAwesomeIcon icon={icon} />
                                </Avatar>
                              }
                              label={this.props.item.tba}
                            />
                          )}
                        </ListItem>
                      </LinkWrapper>
                    </ItemTitleWrapper>
                    {this.props.item.children && (
                      <ChildrenList
                        innerRef={this.childrenListRef}
                        style={{ "--open-ratio": `${openRatio}` }}
                      >
                        {this.props.item.children.map(i => (
                          <TreeViewItem key={i.title} item={i} />
                        ))}
                      </ChildrenList>
                    )}
                  </React.Fragment>
                )}
              </Motion>
            )
          }}
        </Location>
      </React.Fragment>
    )
  }
}

function LinkWrapper(props) {
  if (props.disabled) {
    return <DisabledItem {...props} />
  }
  return <NavigationLink {...props} />
}

export default withSimpleErrorBoundary(TreeViewItem)
