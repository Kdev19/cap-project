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
        <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                    <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
                    <h3>{testimonial.name}</h3>
                    <div className="testimonial-rating">
                        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                    </div>
                    <p>{testimonial.review}</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;