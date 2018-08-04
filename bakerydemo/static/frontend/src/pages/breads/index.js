import React from "react";
import styles from "./breads.module.scss";
import Card from "@components/cards/bread";

export default ({data:{allBread}}) => {

    return (
      <div className={styles.cardContainer}>
        {allBread.edges.map(bread => (
          <Card 
            key={bread.id} 
            bread={bread}
            styles={styles} />
        ))}
      </div>
    )
}

export const query = graphql`
  query BreadQuery {
    allBread {
      edges {
        node {
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
  }
`
