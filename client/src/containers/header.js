import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
    return (
      <div className="navlinks">
        <Link to="/" className="navlinks__button">LeRoy Home</Link>
        <Link to="/town" className="navlinks__button">Town of LeRoy</Link>
        <Link to="/village" className="navlinks__button">Village of LeRoy</Link>
      </div>
    );
}


export default Header;