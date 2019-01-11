/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/osa-1/4-muuttujat`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/osa-1/4-laskentaa`,
  })

  const courseMaterialTemplate = path.resolve(
    `src/templates/CourseContentTemplate.js`,
  )

  const coursePartOverviewTemplate = path.resolve(
    `src/templates/CoursePartOverviewTemplate.js`,
  )

  const query = `
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___path] }
      limit: 1000${
        process.env.NODE_ENV === "production"
          ? `, filter: { frontmatter: { hidden: { ne: true } } }`
          : ""
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            overview
          }
        }
      }
    }
  }
    `

  return graphql(query).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      let template = courseMaterialTemplate
      if (node.frontmatter.overview) {
        template = coursePartOverviewTemplate
      }
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
