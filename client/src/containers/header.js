import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="navlinks">
        <Link to="/town" className="navlinks__button">Town of LeRoy</Link>
        <Link to="/village" className="navlinks__button">Village of LeRoy</Link>
      </div>
    );
}


export default Header;