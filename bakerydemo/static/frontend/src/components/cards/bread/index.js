import React from 'react';
import { getMediaUrl } from '@util/urls'

import styles from './card.module.scss'

export default ({ bread: { node: {title, origin, breadType, image} }}) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={getMediaUrl(image.file)} alt=""/>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardMeta}><span>Origin</span> {origin.title}</p>
                <p className={styles.cardMeta}><span>Type</span> {breadType.title}</p>
            </div>
        </div>
    )
}
