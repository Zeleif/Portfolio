
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

