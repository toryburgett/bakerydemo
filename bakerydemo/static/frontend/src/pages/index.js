import React from "react";
import styles from "./index.module.css";
import Card from "../components/card";

export default ({data}) => {
    return (
      <div className={styles.cardContainer}>
        {data.breadGraphQl.breads.map(bread => (
          <Card key={bread.id} bread={bread} styles={styles} />
        ))}
      </div>
    )
}

export const query = graphql`
  query BreadQuery {
    wagtail {
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
