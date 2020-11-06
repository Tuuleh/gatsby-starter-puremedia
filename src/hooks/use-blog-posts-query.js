import { useStaticQuery, graphql } from "gatsby"
export const useBlogPostsQuery = () => {
    const data = useStaticQuery(
        graphql`
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
        `
    );
    return data.allMarkdownRemark.edges;
};
