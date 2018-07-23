import React from "react";
import styles from "./breads.module.scss";
import Card from "@components/card";

export default ({data: { wagtail }}) => {
    return (
      <div className={styles.cardContainer}>
        {wagtail.breads.map(bread => (
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
