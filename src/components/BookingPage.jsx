import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = ({ availableTimes, updateTimes }) => {
    return (
        <div className="booking-page">
            <h1>Book a Reservation</h1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </div>
    );
};

export default BookingPage;