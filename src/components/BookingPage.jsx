import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import './BookingPage.css';

const BookingPage = ({ availableTimes }) => {
    console.log('availableTimes:', availableTimes); // Log the availableTimes prop

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const [bookedTimes, setBookedTimes] = useState(['18:00', '20:00']); // Example booked times

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.time && !bookedTimes.includes(formData.time)) {
            setBookedTimes([...bookedTimes, formData.time]);
        }
    };

    return (
        <div className="booking-page">
            <h1>Book a Reservation</h1>
            <BookingForm
                availableTimes={availableTimes}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <h2>Available Slots</h2>
            <BookingList availableTimes={availableTimes} bookedTimes={bookedTimes} />
        </div>
    );
};

export default BookingPage;