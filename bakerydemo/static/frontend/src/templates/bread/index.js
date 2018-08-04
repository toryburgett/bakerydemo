import React from 'react'

import styles from './bread.module.scss'

export default () => {
    return (
        <div className={styles.page}>
        </div>
    )
}


//  TODO - fetch the data via ID
// export const query = graphql`
//   query LocationById($id: Int!) {
//     wagtail {
//       location(id: { eq: $id } ) {
//         title
//         body
//         introduction
//         image {
//           file
//         }
//         hoursOfOperation {
//           day
//           openingTime
//           closingTime
//         }
//         address
//       }
//     }
//   }
// `;
