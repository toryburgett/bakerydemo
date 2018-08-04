import React from "react";
import styles from "./breads.module.scss";
import Card from "@components/cards/bread";
import Link from 'gatsby-link';

export default ({data:{allBread}}) => {

    return (
      <article className={styles.page}>
        <header className={styles.pageHeader}>
          <h1>Breads</h1>
          <p>We feature outlandishly delicious breads sourced from every continent (except Antarctica).</p>
        </header>
        <section className={styles.cardContainer}>
          {allBread.edges.map(({node}) => {
            return (
            <Link to={node.slug} key={node.id} className={styles.link}>
              <Card 
                key={node.id} 
                bread={node}
                styles={styles} />
            </Link>
          )})}
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
          slug
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
