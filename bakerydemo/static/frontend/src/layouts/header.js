import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to='/'><h1>The Wagtail Bakery</h1></Link>
                <Link to='/breads/'>Breads</Link>&nbsp;
                <Link to='/locations/'>Locations</Link>
            </header>
        )
    }
}

export default Header;
