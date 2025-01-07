import React from 'react';
import { Link } from 'react-scroll';
import './Herosection.css';

const Herosection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-left">
                    <h1 className="hero-title">Welcome to Our Restaurant</h1>
                    <p className="hero-description">
                        Enjoy the finest dining experience with our exquisite menu and exceptional service.
                    </p>
                    <Link to="booking" smooth={true} duration={500}>
                        <button className="hero-button">Reserve a Table</button>
                    </Link>
                </div>
                <div className="hero-right">
                    <div className="image-holder">
                        {/* Image can be added here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herosection;