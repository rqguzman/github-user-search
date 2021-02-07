import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = () => (
  
    <nav className="main-nav">
        <Link to="/" className="nav-text">
            <h4>
                DevSuperior Bootcamp
            </h4>
        </Link>
    </nav>
);

export default NavBar;