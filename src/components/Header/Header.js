import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-body">
      <nav className="navigation">
        <h1 className="header">BookStore CMS</h1>
        <ul className="links">
          <li>
            <Link to="/books" className="link1 link">Books</Link>
          </li>
          <li>
            <Link to="/categories" className="link2 link">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
