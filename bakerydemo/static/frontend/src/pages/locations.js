import React from 'react';
import styles from './locations.module.css';

export default ({data: { wagtail }}) => {
  return (
    <div>
      <h2>Locations</h2>
      <p>You can find our fine bakeries in friendly cities all over the world.</p>
      <div className={styles.locations}>
        {wagtail.locations.map(location => (
          <div key={location.id}>
            <div className={styles.locationImageContainer}>
              {/* TODO - remove hardcoded url */}
              <img className={styles.locationImage} src={`http://localhost:8000/media/${location.image.file}`} />
              <h3 className={styles.locationHeader}>{location.title}</h3>
            </div>
            <h4 className={styles.locationMeta}>{location.address}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query LocationsQuery {
    wagtail {
      locations {
        id
        title
        address
        image {
          file
        }
      }
    }
  }
`
