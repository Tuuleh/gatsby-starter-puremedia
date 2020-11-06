import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody"
                />
                <hr />
            </article>
        </Layout>
    )
};

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
