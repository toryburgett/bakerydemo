import React from "react";

export default ({data}) => {
    console.log(data)
    return (
        <ul>
            { data.breadGraphQl.breads.map(bread => (
                <li>{ bread.id }</li>
            ))}
        </ul>
    )
}

export const query = graphql`
  query BreadQuery {
    breadGraphQl {
        breads {
           id
        }
    }
  }
`
