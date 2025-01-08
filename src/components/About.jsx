import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <div className="about-left">
                <h1>About Us</h1>
                <p>Mario and Adrian started Little Lemon with a big dream</p>
            </div>
            <div className="about-right">
                <img src="path/to/photo.jpg" alt="Description" className="about-image" />
            </div>
        </section>
    );
};

export default About;