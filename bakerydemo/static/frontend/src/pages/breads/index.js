import React from "react";
import styles from "./breads.module.scss";
import Card from "@components/cards/bread";

export default ({data:{allBread}}) => {

    return (
      <article className={styles.page}>
        <header className={styles.pageHeader}>
          <h1>Breads</h1>
          <p>We feature outlandishly delicious breads sourced from every continent (except Antarctica).</p>
        </header>
        <section className={styles.cardContainer}>
          {allBread.edges.map(bread => (
            <Card 
              key={bread.id} 
              bread={bread}
              styles={styles} />
          ))}
        </section>
      </article>
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
