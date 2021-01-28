/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Puremedia - Free Responsive HTML5/CSS3 Template`,
    author: {
      name: `Joe Bloggs`,
    },
    description: `Puremedia is a clean, modern, landing page site template.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `portfolio`,
      `services`,
      `about`,
      `journal`,
      `contact`,
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'hero', label: 'Home'},
      {path: 'portfolio', label: 'Works'},
      {path: 'services', label: 'Services'},
      {path: 'about', label: 'About'},
      {path: 'journal', label: 'Blog'},
      {path: 'contact', label: 'Contact'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Facebook`,
        url : `https://facebook.com/styleshout`,
        fa: `facebook` },
      { service: `Twitter`,
        url : `https://twitter.com/styleshout`,
        fa: `twitter` },
      { service: `GitHub`,
        url : `https://github.com/tuuleh/gatsby-starter-puremedia`,
        fa: `github` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      title: `About Puremedia`,
      text: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: {
      tel1: { text: `647.343.8234`, url: `tel:6473438234` },
      tel2: { text: `123.456.7890`, url: `tel:1234567890`},
      email: { text: `someone@puremedia.com`, url: `mailto:someone@puremedia.com`},
    },

    social: [
      {
        service: `Facebook`,
        url : `https://facebook.com/styleshout`
      },
      {
        service: `Twitter`,
        url : `https://twitter.com/styleshout`,
      },
      {
        service: `GitHub`,
        url : `https://github.com/tuuleh/gatsby-starter-puremedia`,
      },
    ],

  },
  plugins: [
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-anchor-links`,
      `gatsby-plugin-smoothscroll`,
      `react-scrollspy`,
      `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [] //TODO: image compression and responsive images with gatsby-remark-images
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `png`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },

  ],
};
