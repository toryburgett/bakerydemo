
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const locationTemplate = path.resolve(`src/templates/location.js`);

  return graphql(`{
    wagtail {
      locations {
        id
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
