import React from 'react';
import logo from '../images/logo.png';
import HomeIcon from '../images/icons/Home.png';
import FAQIcon from '../images/icons/FAQ.png';
import UserIcon from '../images/icons/Profile.png';
import '../../src/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      {/* Logo and title */}
      <div className="logo-container">
        <img src={logo} alt="App Logo" className="logo-img" />
        <h1 className="app-title">Data Analysis Concepts</h1>
      </div>

      {/* Search bar */}
      <div className="search-container">
        <div className="search-bar"></div>
        <div className="search-text">Search...</div>
      </div>

      {/* Navigation icons */}
      <nav className="nav-icons">
        <Link to="/">
            <img src={HomeIcon} alt="Home" className="nav-icon" />
        </Link>

        <Link to="/faq">
            <img src={FAQIcon} alt="FAQ" className="nav-icon" />
        </Link>

        <Link>
        <img src={UserIcon} alt="User" className="nav-icon" />
        </Link>
        <button 
          className="btn btn-primary m-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          style={{ backgroundColor: 'transparent', border: 'none' }} 
        >
        <i className="nav-icon bi bi-list"></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;