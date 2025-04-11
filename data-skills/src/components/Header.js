import React from 'react';
import '../header.css';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* <img src={logo} alt="Logo" /> */}
                <h1>Data Analysis Concepts</h1>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;