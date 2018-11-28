module.exports = {
  siteMetadata: {
    title: 'Ohjelmoinnin MOOC 2019',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
