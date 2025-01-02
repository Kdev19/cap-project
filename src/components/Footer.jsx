import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Adjust the path to your logo image

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-section">
                <h3>Contact</h3>
                <ul>
                    <li>Email: example@example.com</li>
                    <li>Phone: 123-456-7890</li>
                    <li>Address: 123 Example St, City, Country</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Doormat</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Social Media Links</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;