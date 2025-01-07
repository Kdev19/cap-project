import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = ({ availableTimes }) => {
    console.log('availableTimes:', availableTimes); // Log the availableTimes prop

    return (
        <div className="booking-page">
            <h1>Book a Reservation</h1>
            <BookingForm availableTimes={availableTimes} />
        </div>
    );
};

export default BookingPage;