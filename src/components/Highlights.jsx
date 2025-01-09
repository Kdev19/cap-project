import React from 'react';
import './Highlights.css';
import pasta from '../assets/pasta.jpg';
import salad from '../assets/salad.jpg';
import tomatosw from '../assets/tomatosw.jpg';

const Highlights = () => {
    return (
        <section className="highlights-container">
            <header className="header">
                <h2>Specials</h2>
                <button className="online-menu-button">Online Menu</button>
            </header>
            <div className="cards-container">
                <article className="card">
                    <img src={pasta} alt="Pasta" className="card-image" />
                    <div className="card-content">
                        <h3>Spaghetti Carbonara</h3>
                        <p>A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
                        <a href="#" className="order-link">Order a delivery</a>
                    </div>
                </article>
                <article className="card">
                    <img src={salad} alt="Salad" className="card-image" />
                    <div className="card-content">
                        <h3>Caesar Salad</h3>
                        <p>Fresh romaine lettuce, croutons, and Parmesan cheese, tossed in Caesar dressing.</p>
                        <a href="#" className="order-link">Order a delivery</a>
                    </div>
                </article>
                <article className="card">
                    <img src={tomatosw} alt="Tomato Sandwich" className="card-image" />
                    <div className="card-content">
                        <h3>Tomato Basil Sandwich</h3>
                        <p>A delicious sandwich with fresh tomatoes, basil, mozzarella, and a drizzle of balsamic glaze.</p>
                        <a href="#" className="order-link">Order a delivery</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Highlights;