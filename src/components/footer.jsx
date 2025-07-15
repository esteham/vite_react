// src/components/Footer.jsx
import React from 'react';
import './../css/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Your Company</h3>
          <p>Building innovative solutions for the modern web.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`/${item.toLowerCase()}`} 
                  className="footer-link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <div style={{ display: 'flex' }}>
            <input
              type="email"
              placeholder="Your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>© {currentYear} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;