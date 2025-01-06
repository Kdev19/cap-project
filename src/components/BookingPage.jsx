import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = () => {
    return (
        <div className="booking-page">
            <h1>Book a Reservation</h1>
            <BookingForm />
        </div>
    );
};

export default BookingPage;