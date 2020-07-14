/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/",
    component: path.resolve('./src/pages/home/index.js'),
    context: {},
  })
};
