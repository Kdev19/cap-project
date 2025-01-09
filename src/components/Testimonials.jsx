import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        photo: 'path/to/photo1.jpg',
        rating: 5,
        review: 'This is an amazing product! Highly recommend it.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        photo: 'path/to/photo2.jpg',
        rating: 4,
        review: 'Great value for the price. Will buy again.',
    },
    {
        id: 3,
        name: 'Sam Wilson',
        photo: 'path/to/photo3.jpg',
        rating: 5,
        review: 'Exceeded my expectations. Fantastic!',
    },
    {
        id: 4,
        name: 'Sara Lee',
        photo: 'path/to/photo4.jpg',
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