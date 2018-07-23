module.exports = {
    siteMetadata: {
        title: `Wagtail Bakery Demo`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-graphql',
            options: {
                endpoint: 'http://localhost:8000/graphql',
                queries: {
                    type: 'wagtail',
                    path: `${__dirname}/src/queries/`,
                }
            },
        },
        
        {
            resolve: `gatsby-plugin-sass`,
        },

        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                'Alegreya',
                'Lato'
              ]
            }
        },
    ]
};
