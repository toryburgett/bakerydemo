module.exports = {
    siteMetadata: {
        title: `Wagtail Bakery Demo`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-graphql',
            options: {
                endpoint: 'http://localhost:8000/graphql',
                queries: [
                    { 
                        type: 'location', 
                        extractKey: 'locations', 
                        path: './src/queries/locations.graphql',
                        transform: node => tranformWagtailPage(node)
                    }
                ]
            },
        },

        {
            resolve: 'gatsby-plugin-graphql',
            options: {
                endpoint: 'http://localhost:8000/graphql',
                queries: [
                    { 
                        type: 'bread', 
                        extractKey: 'breads', 
                        path: './src/queries/bread.graphql',
                        transform: node => tranformWagtailPage(node)
                    }
                ]
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


const tranformWagtailPage = page => ({
    ...page,
    body: (!page.body)
        ? null
        : page.body.map(({type, value}) => ({
            type,
            value: (typeof value == 'string')
                ? { content: value }
                : value
        }))
})