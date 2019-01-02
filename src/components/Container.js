import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`

export default withSimpleErrorBoundary(Container)
