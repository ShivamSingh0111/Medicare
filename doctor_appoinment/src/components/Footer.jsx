import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MediBook</h3>
          <p>Your trusted healthcare partner</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#doctors">Find Doctors</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>info@medibook.com</p>
          <p>+1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MediBook. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;