module.exports = {
    siteMetadata: {
        title: `Wagtail Bakery Demo`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-wagtail',
            options: {
                endpoint: 'http://localhost:8000/graphql',
                queries: {
                    type: 'wagtail',
                    path: `${__dirname}/src/queries/`,
                }
            },
        },
    ]
};
