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
			This MOOC contains the topics covered in the courses Introduction to 
			Programming and Advanced Programming Course (5 + 5 ECTS).
			The topics are presented with theory, examples and interactive exercises,
			powered by the TMC (Test My Code) system.
		</p>
		<p>
			Sections 1 to 7 belong to the introductory course, and sections 8 to 14 to the 
			advanced course. Each section consists of approx. 20 to 40 exercises. You should
			set aside 5 to 20 hours for completing the exercises each week.
			If you have not started yet, create an account and start from Section 1.
		</p>
		<h1>Requirements</h1>
		<p>
			To pass the course, you need to complete at least 75 % of the exercises in these
			tutorials. Moreover, you need to complete at least 50 % of the exercises in ViLLE.
			Exercises are released after the lecture on Tuesday, and <b>the deadline is at 
			following Thursday.</b>
		</p>
	</section>
	<section id="workshops">
		<h1>How to get help?</h1>
		<p>
			There are workshops where you can (and <b>should</b>) go to ask for help.
			The workshop times are listed below. Please note, that the times are subject to
			change. Refer to this list for the most updated information. 
		</p>
		<ul>
			<li>Monday 12.00 to 18.00</li>
			<li>Tuesday 12.00 to 18.00</li>
			<li>Wednesday 12.00 to 16.00</li>
			<li>Thursday 14.00 to 16.00</li>
			<li>Friday 12.00 to 14.00</li>
		</ul>
		<p>
			The easiest way to contact course staff is via workshops. You can also mail to
			erkki.kaila(@)helsinki.fi or reetta.puska@helsinki.fi or use the course discussion
			forum.
		</p>
	</section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
