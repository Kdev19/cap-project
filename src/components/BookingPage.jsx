import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = ({ availableTimes }) => {
    console.log('availableTimes:', availableTimes); // Log the availableTimes prop

    const [formData, setFormData] = useState({
        time: '',
        guests: 1,
        occasion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="booking-page">
            <h1>Book a Reservation</h1>
            <BookingForm availableTimes={availableTimes} formData={formData} handleChange={handleChange} />
        </div>
    );
};

export default BookingPage;