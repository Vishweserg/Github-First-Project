import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>About</h4>
          <ul>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/flipkart-stories">Flipkart Stories</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Help</h4>
          <ul>
            <li><a href="/payments">Payments</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/cancellation">Cancellation & Returns</a></li>
            <li><a href="/FAQ">FAQ</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Policy</h4>
          <ul>
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Social</h4>
          <ul>
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/twitter">Twitter</a></li>
            <li><a href="/youtube">YouTube</a></li>
            <li><a href="/instagram">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <p>© 2024 Flipkart Clone - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
