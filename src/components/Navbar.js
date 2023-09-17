import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='navbar-title'>
            <p>LegalEase</p>
        </div>
        <ul className="navbar-links">
          <li className="navbar-link">Home</li>
          <li className="navbar-link">About</li>
          <li className="navbar-link">Contact</li>
          <li className="navbar-link">UseCases</li>
        </ul>
        <div className="navbar-auth">
          <button className="auth-button">Login</button>
          <button className="auth-button">Signup</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
