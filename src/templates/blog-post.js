import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <div className="blog-post-container">
                <h1>`Your Blog Name - ${post.frontmatter.title}`}</h1>
                <div className="blog-post">
                    <h1>{post.frontmatter.title}</h1>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>
            </div>
        </Layout>
    )
};

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        abstract
        slug
      }
    }
  }
`
