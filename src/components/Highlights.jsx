import React from 'react';
import './Highlights.css';

const Highlights = () => {
    return (
        <section className="highlights-container">
            <header className="header">
                <h2>Specials</h2>
                <button className="online-menu-button">Online Menu</button>
            </header>
            <div className="cards-container">
                <article className="card">
                    <figure>
                        <img src="image1.jpg" alt="Dish 1" className="card-image" />
                        <figcaption>
                            <div className="card-content">
                                <h3>Dish Name 1</h3>
                                <p>Description of the dish 1.</p>
                                <a href="#" className="order-link">Order a delivery</a>
                            </div>
                        </figcaption>
                    </figure>
                </article>
                <article className="card">
                    <figure>
                        <img src="image2.jpg" alt="Dish 2" className="card-image" />
                        <figcaption>
                            <div className="card-content">
                                <h3>Dish Name 2</h3>
                                <p>Description of the dish 2.</p>
                                <a href="#" className="order-link">Order a delivery</a>
                            </div>
                        </figcaption>
                    </figure>
                </article>
                <article className="card">
                    <figure>
                        <img src="image3.jpg" alt="Dish 3" className="card-image" />
                        <figcaption>
                            <div className="card-content">
                                <h3>Dish Name 3</h3>
                                <p>Description of the dish 3.</p>
                                <a href="#" className="order-link">Order a delivery</a>
                            </div>
                        </figcaption>
                    </figure>
                </article>
            </div>
        </section>
    );
};

export default Highlights;