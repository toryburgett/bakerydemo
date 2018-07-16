import React from "react";

export default ({data}) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <div>

    </div>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
