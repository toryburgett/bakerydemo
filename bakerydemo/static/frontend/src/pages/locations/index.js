import React from 'react';
import styles from './locations.module.scss';
import Link from 'gatsby-link';

export default ({data: {allLocation}}) => {
  return (
    <div>
      <h2>Locations</h2>
      <p>You can find our fine bakeries in friendly cities all over the world.</p>
      <div className={styles.locations}>
        {allLocation.edges.map(({node}) => (
          <Link to={node.slug} key={node.id}>
            <div className={styles.locationImageContainer}>
              {/* TODO - remove hardcoded url */}
              <img className={styles.locationImage} src={`http://localhost:8000/media/${node.image.file}`} />
              <h3 className={styles.locationHeader}>{node.title}</h3>
            </div>
            <h4 className={styles.locationMeta}>{node.address}</h4>
          </Link>
        ))}
      </div>
    </div>
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
