import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <article className="about-left">
                <header>
                    <h1>About Us</h1>
                </header>
                <p>Mario and Adrian started Little Lemon with a big dream</p>
            </article>
            <aside className="about-right">
                <img src="path/to/photo.jpg" alt="Description" className="about-image" />
            </aside>
        </section>
    );
};

export default About;