import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <h1>MediBook</h1>
          <p>Doctor Appointment System</p>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#appointments">My Appointments</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="user-actions">
          <button className="btn-login">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;