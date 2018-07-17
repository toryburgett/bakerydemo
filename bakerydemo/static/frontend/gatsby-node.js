
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const locationTemplate = path.resolve(`src/templates/locations.js`);

  return graphql(`{
    wagtail {
      locations {
        slug
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.wagtail.locations
        .forEach((node) => {
          createPage({
            path: `locations/${node.slug}`,
            component: locationTemplate,
            context: {} // additional data can be passed via context
          });
        });
    });
}
