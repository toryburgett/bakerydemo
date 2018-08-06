import React from 'react'

import styles from './paragraph.module.scss'

export default ({ content }) => {
  return <div
    className={styles.content}
    dangerouslySetInnerHTML={{ __html: content }} />
}