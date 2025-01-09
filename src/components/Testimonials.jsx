import React from 'react';
import './Testimonials.css';
import bald from '../assets/bald.jpg';
import blond1 from '../assets/blond1.jpg';
import blond2 from '../assets/blond2.png';
import olderman from '../assets/olderman.jpg';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        photo: bald,
        rating: 5,
        review: 'This is an amazing product! Highly recommend it.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        photo: blond1,
        rating: 4,
        review: 'Great value for the price. Will buy again.',
    },
    {
        id: 3,
        name: 'Sam Wilson',
        photo: blond2,
        rating: 5,
        review: 'Exceeded my expectations. Fantastic!',
    },
    {
        id: 4,
        name: 'Sara Lee',
        photo: olderman,
        rating: 3,
        review: 'It’s good, but there’s room for improvement.',
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <header>
                <h2>Customer Testimonials</h2>
            </header>
            <div className="testimonials-container">
                {testimonials.map((testimonial) => (
                    <article key={testimonial.id} className="testimonial-card">
                        <figure>
                            <img src={testimonial.photo} alt={`${testimonial.name}'s photo`} className="testimonial-photo" />
                            <figcaption>{testimonial.name}</figcaption>
                        </figure>
                        <div className="testimonial-content">
                            <p className="testimonial-rating">Rating: {testimonial.rating} stars</p>
                            <p className="testimonial-review">{testimonial.review}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;