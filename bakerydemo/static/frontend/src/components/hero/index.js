import React from 'react'
import styles from './hero.module.scss'

export default ({ title, image, tag }) => (
  <div className={styles.hero} style={{backgroundImage: `url(${image})`}}>
    <div className={styles.heroMeta}>
      <h1 className={styles.heroMetaTitle}>{title}</h1>
    </div>
  </div>
)