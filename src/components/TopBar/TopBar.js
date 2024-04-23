import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topbar">
      <h1>8TonnE</h1>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sell" onClick={toggleMenu}>
              SELL
            </Link>
          </li>
          <li>
            <Link to="/buy" onClick={toggleMenu}>
              BUY
            </Link>
          </li>
          <li>
            <Link to="/make" onClick={toggleMenu}>
              MAKE
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={toggleMenu}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/logistics" onClick={toggleMenu}>
              LOGISTICS
            </Link>
          </li>
          <li>
            <Link to="/weatherforecasting" onClick={toggleMenu}>
              WEATHER FORECASTING
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div>
        <select>
          <option value="en">English</option>
          <option value="te">తెలుగు (Telugu)</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;