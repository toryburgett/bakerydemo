import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './nav.module.scss'


export default ({ links }) => {
    return (
        <div className={styles.stickyNav}>
            <span className={styles.stickyNavLink}>
                <FontAwesomeIcon icon={faSearch} />
            </span>
            {(links || []).map(link => (
                <Link
                    key={link.url}
                    className={styles.stickyNavLink}
                    activeClassName={styles.stickyNavLinkActive}
                    to={link.url}>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}