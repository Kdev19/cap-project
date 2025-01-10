import React from 'react';
import { Link } from 'react-scroll';
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
                        Our chefs use only the freshest ingredients to create mouth-watering dishes that will 
                        delight your taste buds. Whether you're here for a romantic dinner, a family gathering, 
                        or a special celebration, we strive to make every moment memorable. Our elegant ambiance 
                        and attentive staff ensure that you have a wonderful dining experience from start to finish. 
                        Join us and indulge in a culinary journey that you won't forget.
                    </p>
                    <Link to="booking-section" smooth={true} duration={500}>
                        <button className="hero-button">Reserve a Table</button>
                    </Link>
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