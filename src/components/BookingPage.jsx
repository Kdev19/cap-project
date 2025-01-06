import React from 'react';
import BookingForm from './Bookingform';
import './BookingPage.css';

const BookingPage = ({ availableTimes }) => {
    return (
        <div className="booking-page">
            <h1>Book a Reservation</h1>
            <BookingForm availableTimes={availableTimes} />
        </div>
    );
};

export default BookingPage;