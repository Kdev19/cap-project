import React from 'react';
import './About.css';
import marioadrian from '../assets/marioadrian.jpg';

const About = () => {
    return (
        <section className="about-container">
            <article className="about-left">
                <header>
                    <h1>About Us</h1>
                </header>
                <p>
                    Mario and Adrian started Little Lemon with a big dream. Their passion for culinary excellence and dedication to providing an exceptional dining experience has made Little Lemon a beloved destination for food enthusiasts. With a focus on fresh, locally sourced ingredients and innovative recipes, they have created a menu that delights the senses and satisfies the soul. Join us at Little Lemon and experience the magic of Mario and Adrian's culinary vision.
                </p>
            </article>
            <aside className="about-right">
                <img src={marioadrian} alt="Mario and Adrian" className="about-image" />
            </aside>
        </section>
    );
};

export default About;