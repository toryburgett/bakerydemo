import React from 'react'
import styles from './locations.module.scss'
import Link from 'gatsby-link'

import { getMediaUrl } from '@util/urls'

export default ({data}) => {
  const locations = data.allPage.edges
  return (
    <article className={styles.page}>
      <div className={styles.pageContent}>
        <header className={styles.pageHeader}>
          <h1>Locations</h1>
          <p>You can find our fine bakeries in friendly cities all over the world.</p>
        </header>

        <section className={styles.locations}>
          {locations.map(({node}) => (
            <Link to={node.slug} key={node.id}>
              <div className={styles.locationImageContainer}>
                <img className={styles.locationImage} src={getMediaUrl(node.image.file.thumbnail)}/>
                <h3 className={styles.locationHeader}>{node.title}</h3>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </article>
  )
}

export const query = graphql`
    query LocationQuery {
        allPage(filter: { type: { eq: "LocationPage" } }) {
            edges {
                node {
                    id
                    title
                    slug
                    address
                    image {
                        file {
                            original
                            thumbnail
                        }
                    }
                }
            }
        }
    }
`
