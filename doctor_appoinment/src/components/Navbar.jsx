import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaCalendarAlt, FaBars, FaTimes, FaHome, FaUserCircle, FaClinicMedical } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = ({ currentUser, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); 
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavigation('/')}>
          <FaClinicMedical className="logo-icon" />
          <div className="logo-text">
            <span className="logo-main">MediCare</span>
            <span className="logo-sub">Hospital Solutions</span>
          </div>
        </div>

        <ul className="navbar-links">
          <li>
            <button onClick={() => handleNavigation('/')}>
              <FaHome className="nav-icon" />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/doctors')}>
              <FaUserMd className="nav-icon" />
              <span>Doctors</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/appointments')}>
              <FaCalendarAlt className="nav-icon" />
              <span>Appointments</span>
            </button>
          </li>
        </ul>

        <div className="navbar-profile">
          {currentUser ? (
            <div className="profile-dropdown">
              <div className="profile-info">
                <FaUserCircle className="profile-icon" />
                <span className="profile-name">{currentUser.name}</span>
              </div>
              <div className="dropdown-content">
                <button onClick={() => handleNavigation('/profile')}>My Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <button 
              className="login-button"
              onClick={() => handleNavigation('/login')}
            >
              <FaUserCircle className="profile-icon" />
              <span>Login/Signup</span>
            </button>
          )}
        </div>

        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="menu-icon" />
          ) : (
            <FaBars className="menu-icon" />
          )}
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <button onClick={() => handleNavigation('/')}>
              <FaHome className="nav-icon" />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/doctors')}>
              <FaUserMd className="nav-icon" />
              <span>Doctors</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/appointments')}>
              <FaCalendarAlt className="nav-icon" />
              <span>Appointments</span>
            </button>
          </li>
          <li>
            {currentUser ? (
              <>
                <button onClick={() => handleNavigation('/profile')}>
                  <FaUserCircle className="nav-icon" />
                  <span>My Profile</span>
                </button>
                <button onClick={handleLogout}>
                  <FaUserCircle className="nav-icon" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button onClick={() => handleNavigation('/login')}>
                <FaUserCircle className="nav-icon" />
                <span>Login/Signup</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;