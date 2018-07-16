import React from "react";

import Card from "../components/card";

export default ({data}) => {
    return (
      <ul>
        {data.breadGraphQl.breads.map(bread => (
          <Card key={bread.id} bread={bread} />
        ))}
      </ul>
    )
}

export const query = graphql`
  query BreadQuery {
    breadGraphQl {
        breads {
          id
          title
          origin {
            title
          }
          breadType {
            title
          }
          image {
            file
          }
      }
    }
  }
`
