module.exports = {
  siteMetadata: {
    title: 'T-Twon Task',
    description: 'No Job Too Small, We Do It All',
    siteUrl: 'https://www.ttowntask.com',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-helmet',
      options: {},
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
  ],
};
