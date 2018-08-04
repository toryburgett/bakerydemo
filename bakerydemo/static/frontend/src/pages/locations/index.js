import React from 'react';
import styles from './locations.module.scss';
import Link from 'gatsby-link';

export default ({data: {allLocation}}) => {
  return (
    <article className={styles.page}>
      <header className={styles.pageHeader}>
        <h1>Locations</h1>
        <p>You can find our fine bakeries in friendly cities all over the world.</p>
      </header>

      <section className={styles.locations}>
        {allLocation.edges.map(({node}) => (
          <Link to={node.slug} key={node.id}>
            <div className={styles.locationImageContainer}>
              <img className={styles.locationImage} src={`http://localhost:8000/media/${node.image.file}`} />
              <h3 className={styles.locationHeader}>{node.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </article>
  )
}

export const query = graphql`
  query LocationQuery {
      allLocation {
        edges {
          node {
          id
          title
          slug
          address
          image {
            file
          }
        } 
      }
    }
  }
`
