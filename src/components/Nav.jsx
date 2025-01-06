import React from 'react';
import { Link } from 'react-scroll';
import './Nav.css';
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="home" smooth={true} duration={500}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="highlights" smooth={true} duration={500}>Menu</Link></li>
                    <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
                    <li><Link to="booking" smooth={true} duration={500}>Reservations</Link></li>
                    <li><Link to="order-online" smooth={true} duration={500}>Order Online</Link></li>
                    <li><Link to="login" smooth={true} duration={500}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;