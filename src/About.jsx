import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-left">
                <h1>Name</h1>
                <p>Description</p>
            </div>
            <div className="about-right">
                <img src="path/to/photo.jpg" alt="Description" />
            </div>
        </div>
    );
};

export default About;