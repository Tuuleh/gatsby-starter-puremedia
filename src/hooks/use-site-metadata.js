import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
          query MyQuery {
            site {
              siteMetadata {
                title
                description
                author{
                  name
                }
                sections
                favicon
                logo
                menuItems{
                  path
                  label
                }
                social{
                  service
                  url
                }
                footer{
                  title
                  text
                }
                address{
                  line1
                  line2
                  line3
                }
                contacts {
                  tel1{
                    url
                    text  
                  }
                  tel2{
                    url
                    text  
                  }
                  email{
                    url
                    text  
                  }
                }
              }
            }
          }
        `
    );
    return site.siteMetadata
};
