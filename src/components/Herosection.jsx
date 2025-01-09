import React from 'react';
import './Herosection.css';
import house from '../assets/house.jpg';

const Herosection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-left">
                    <header>
                        <h1 className="hero-title">Welcome to Our Restaurant</h1>
                    </header>
                    <p className="hero-description">
                        Enjoy the finest dining experience with our exquisite menu and exceptional service.
                    </p>
                    <button className="hero-button">Reserve a Table</button>
                </div>
                <div className="hero-right">
                    <div className="image-holder">
                        {house && <img src={house} alt="House" className="hero-image" />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herosection;