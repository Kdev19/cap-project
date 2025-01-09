import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src="path/to/logo.png" alt="Company Logo" />
            </div>
            <div className="footer-section">
                <h3>Contact Us</h3>
                <address>
                    <ul>
                        <li>Phone: 123-456-7890</li>
                        <li>Address: 123 Example St, City, Country</li>
                    </ul>
                </address>
            </div>
            <div className="footer-section">
                <h3>Doormat</h3>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-section">
                <h3>Social Media Links</h3>
                <nav>
                    <ul>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.twitter.com">Twitter</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;