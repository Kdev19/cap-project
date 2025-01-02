import React from 'react';
import './Highlights.css';

const Highlights = () => {
    return (
        <div className="highlights-container">
            <div className="sidebar">
                <h2>Specials</h2>
                <button className="online-menu-button">Online Menu</button>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src="image1.jpg" alt="Dish 1" className="card-image" />
                    <div className="card-content">
                        <h3>Dish Name 1</h3>
                        <p>Description of the dish 1.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="image2.jpg" alt="Dish 2" className="card-image" />
                    <div className="card-content">
                        <h3>Dish Name 2</h3>
                        <p>Description of the dish 2.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="image3.jpg" alt="Dish 3" className="card-image" />
                    <div className="card-content">
                        <h3>Dish Name 3</h3>
                        <p>Description of the dish 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;