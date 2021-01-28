import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import content from "../../content/journal.yaml"


const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark;
    const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Layout>
            <section id="page-title">
                <div className="row">
                    <div className="twelve column">
                        <h1>Our Blog<span>.</span></h1>
                        <p>{content.description}</p>

                    </div>
                </div>
            </section>
            <section id="content">
                <div className="row">
                    <div id="main" className="tab-whole eight columns">
                        <article className="entry">
                            <header className="entry-header">
                                <h1 className="entry-title">{post.frontmatter.title}</h1>
                                <div className="entry-meta">
                                    <ul>
                                        <li>{post.frontmatter.date}</li>
                                        <span className="meta-sep">.</span>
                                        <li><a rel="category tag" title="" href="#">Example tag</a></li>
                                        <span className="meta-sep">.</span>
                                        <li>{post.frontmatter.author}</li>
                                        <span className="meta-sep">.</span>
                                    </ul>
                                </div>
                            </header>
                            <div className="entry-content-media">
                                <div className="post-thumb">
                                    <Img fluid={featuredImgFluid}/>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default BlogPostTemplate


export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MM, DD, YYYY")
        abstract
        path
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
