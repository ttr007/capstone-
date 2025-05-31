import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../../src/header.css';

function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center px-3 py-2">
      {/* Logo and title */}
      <div className="d-flex align-items-center">
        <img src={logo} alt="App Logo" className="logo-img me-2" />
        <h1 className="app-title mb-0">Data Analysis Concepts</h1>
      </div>

      {/* Navigation icons */}
      <nav className="d-flex align-items-center gap-3">
        <Link to="/" className="nav-icon-link">
          <i className="bi bi-house nav-icon" title="Home"></i>
        </Link>

        <Link to="/faw" className="nav-icon-link">
          <i className="bi bi-question-circle nav-icon " title="FAQ"></i>
        </Link>

        <button 
          className="btn p-0"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          style={{ backgroundColor: 'transparent', border: 'none' }}
          title="Menu"
        >
          <i className="bi bi-list nav-icon"></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;
