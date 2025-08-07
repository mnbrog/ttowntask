module.exports = {
  siteMetadata: {
    title: 'Sheffield Collision Center',
    description: 'Collision repair you can trust in Sheffield.',
    siteUrl: 'https://www.sheffieldscollisioncenter.com',
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
