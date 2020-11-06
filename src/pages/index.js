import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import About from "../components/about";
import Journal from "../components/journal";

import { useSiteMetadata } from "../hooks/use-site-metadata";

export default () => {
  const { sections } = useSiteMetadata();
  const availableSections = {
      "hero": Hero,
      "portfolio": Portfolio,
      "services": Services,
      "about": About,
      "journal": Journal
  };

  return(
      <>
        <Layout>
          { sections.map((section, i) => {
            let SectionName = availableSections[section];
            return <SectionName key={i} />
          }) }
        </Layout>
      </>
  )
}

export const blogPostsQuery = graphql `
  query BlogPostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            abstract
          }
        }
      }
    }
  }

`;