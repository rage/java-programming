import React from "react"

import Layout from "../templates/Layout"
import Banner from "../components/Banner"
import GatsbyLink from "gatsby-link"
import { Link } from "gatsby"
import { withLoginStateContext } from "../contexes/LoginStateContext"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import Container from "../components/Container"

const IndexPage = () => (
  <Layout>
    <Banner />
    <Container>
      <section id="general">
        <h1>Welcome to Programming MOOC!</h1>
        <p>
          The new version of the popular Object-Oriented programming with java will be released in Q1 2020. The course will have 2 parts: Introduction to programming and Advanced course in programming.
        </p>

        <p>This page will be updated with more information in January.</p>
      </section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
