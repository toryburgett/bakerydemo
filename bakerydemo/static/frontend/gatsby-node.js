
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const locationTemplate = path.resolve(`src/templates/location/index.js`);

  return graphql(`{
    allLocation {
      edges {
        node {
          id
          slug
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }
      
      result.data.allLocation.edges
        .map(({node}) => {
            const id = node.id;
            createPage({
              path: `locations/${node.slug}`,
              component: locationTemplate,
              context: {
                id
              }
            });
          });
    });
}

exports.modifyBabelrc = ({ babelrc }) => {
	return {
		...babelrc,
		plugins: babelrc.plugins.concat([["babel-plugin-module-resolver", {
      "root": ["./src"],
      "alias": {
        "@components": "./src/components",
        "@layouts": "./src/layouts",
        "@pages": "./src/pages",
        "@queries": "./src/queries",
        "@templates": "./src/templates",
        "@styles": "./src/styles",
        "@util": "./src/util",
      }
    }]])
	}
}