import React from 'react';
import styles from './location.module.scss';

export default () => {
    return (
      <div>
        <div className={styles.hero}>
          <img className={styles.heroImage} src="http://placehold.it/1920x600" alt=""/>
          <div className={styles.heroMeta}>
            <h3>Hof</h3>
            <p>Sorry, this location is currently closed</p>
          </div>
        </div>

        <div className={styles.introContainer}>
          <p>Ice cream pie tiramisu carrot cake pie macaroon brownie wafer. Cupcake cookie cotton candy jelly-o macaroon tootsie roll ice cream. Biscuit caramels apple pie. Marshmallow lollipop gingerbread chocolate powder ice cream tootsie roll.</p>
          <div>
            <time><span>Mon</span> 9:00am - 6:00pm</time><br />
            <time><span>Tue</span> 9:00am - 6:00pm</time><br />
            <time><span>Wed</span> 9:00am - 6:00pm</time><br />
            <time><span>Thu</span> 9:00am - 8:00pm</time><br />
            <time><span>Fri</span> 9:00am - 6:00pm</time><br />
            <time><span>Sat</span> 9:00am - 1:00pm</time><br />
            <time><span>Sun</span> Closed</time>
          </div>
        </div>

        <div>
          <p>Gingerbread jujubes pudding lollipop cake sweet pudding biscuit. Dessert sweet roll gummies. Pudding jujubes powder macaroon. Lollipop sweet roll jelly-o tiramisu chupa chups marzipan tart cookie. Macaroon tootsie roll lemon drops. Fruitcake macaroon liquorice bonbon chocolate bar caramels donut pastry. Wafer candy canes jujubes powder gummi bears candy canes biscuit pastry oat cake. Halvah pastry lemon drops gummi bears lemon drops powder. Tart lollipop bonbon apple pie sugar plum gummies cake.</p>
        </div>
      </div>
    );
};

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
