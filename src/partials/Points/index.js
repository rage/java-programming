import React from "react"
import PointsImpl from "./PointsImpl"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { accessToken } from "../../services/moocfi"

export default class Points extends React.Component {
  state = {
    render: false,
  }
  componentDidMount() {
    this.setState({ render: true })
  }
  render() {
    if (!this.state.render) {
      return <div>Loading...</div>
    }
    const apolloClient = new ApolloClient({
      uri: "https://www.mooc.fi/api",
      request: async (operation) => {
        const token = accessToken()
        if (!token) {
          return
        }
        operation.setContext({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      },
    })
    return (
      <ApolloProvider client={apolloClient}>
        <PointsImpl />{" "}
      </ApolloProvider>
    )
  }
}
