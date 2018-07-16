module.exports = {
    siteMetadata: {
        title: `Wagtail Bakery Demo`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'queries',
                path: `${__dirname}/src/queries/`,
            },
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                url: 'http://localhost:8000/graphql',
            },
        },
    ]
};
