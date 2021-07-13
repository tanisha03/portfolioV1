/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tanisha Sabherwal`,
    description: `Tanisha Sabherwal's personal internet space with learnings, ideas and more.`,
    author:`Tanisha Sabherwal`,
    handle: `@tanishaaa03`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-196038948-1", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/books`,
        name: 'Books',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/garden`,
        name: 'Garden',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/codeDraw`,
        name: 'Drawings',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        defaultLayouts: {
          Books: require.resolve("./src/templates/book.js"),
          Garden: require.resolve("./src/templates/garden.js"),
          Drawings: require.resolve("./src/templates/drawing.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle:
                'border-radius: 4px; max-width: 100%; margin-bottom: 0;',
                disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
              quality: 100,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [480, 576, 750, 1080, 1366, 1920],
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
          {
            family: `Montserrat`,
            variants: ["100","300", "400", "500","600","700"],
          }
        ],
        }
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/books`
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/garden`
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/codeDraw`
      }
    },
  ],
}
