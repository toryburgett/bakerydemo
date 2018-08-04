import React from 'react'

import { getMediaUrl } from '@util/urls'

import styles from './bread.module.scss'

export default (props) => {
    const { data: {bread} } = props
    console.log(bread)
    return (
        <article className={styles.page}>
            <header className={styles.pageHeader}>
                <h1>{bread.title}</h1>
            </header>
            
            <section className={styles.breadInfo}>
                <p className={styles.breadIntro}>{bread.introduction}</p>
                <img className={styles.breadImg} src={getMediaUrl(bread.image.file)} />

                <section className={styles.breadMeta}>
                    <span className={styles.breadMetaRow}>
                        <span className={styles.cardMetaLabel}>Origin:</span> 
                        <span>{bread.origin.title}</span>
                    </span>
                    <span className={styles.breadMetaRow}>
                        <span className={styles.cardMetaLabel}>Type:</span> 
                        <span>{bread.breadType.title}</span>
                    </span>
                </section>

            </section>
        
        </article>
    )
}

export const query = graphql`
  query BreadById($id: String!) {
      bread(id: { eq: $id } ) {
        title
        introduction
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
`;
