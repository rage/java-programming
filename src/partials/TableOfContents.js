import React, { Component } from "react"
import Loading from "../components/Loading"
import styled from "styled-components"
import { Paper } from "@material-ui/core"
import { normalizeExerciseId } from "../util/strings"
import { withTranslation } from "react-i18next"

const TableOfContentsWrapper = styled(Paper)`
  padding: 1rem;
  margin: 2rem 0;
`

class TableOfContents extends Component {
  state = { data: null }

  componentDidMount() {
    const data = Array.from(
      document.querySelectorAll(
        "h1.material-header,h2.material-header,h3.material-header",
      ),
    ).map(o => {
      return o.textContent || o.innerText
    })
    this.setState({ data })
  }

  render() {
    return (
      <TableOfContentsWrapper>
        <h2>{this.props.t("tableOfContents")}</h2>
        <div>
          {this.state.data ? (
            <ol>
              {this.state.data.map(o => {
                return (
                  <li key={o}>
                    <a href={`#heading-${normalizeExerciseId(o)}`}>{o}</a>
                  </li>
                )
              })}
            </ol>
          ) : (
            <Loading />
          )}
        </div>
      </TableOfContentsWrapper>
    )
  }
}

export default withTranslation("common")(TableOfContents)
