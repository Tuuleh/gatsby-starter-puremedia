const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Define a template for blog post
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

    // Get all markdown blog posts sorted by date
    const result = await graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {}, // TODO: query and pass previous page and next page
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    console.log("NODE CREATED ", node);
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const filename = createFilePath({ node, getNode });

        createNodeField({
            name: `path`,
            node,
            value: `/blog/${filename}`
        })
    }
}