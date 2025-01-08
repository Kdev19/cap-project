import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingList from './BookingList';
import './BookingPage.css';

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    const navigate = useNavigate(); // Use the useNavigate hook

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const [bookedTimes, setBookedTimes] = useState(['18:00', '20:00']);

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
            submitForm(formData, navigate); // Use the submitForm function
        }
    };

    return (
        <main className="booking-page">
            <header>
                <h1>Book a Reservation</h1>
            </header>
            <section>
                <BookingForm
                    availableTimes={availableTimes}
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    dispatch={dispatch}
                />
            </section>
            <section>
                <h2>Available Slots {formData.date && `for ${formData.date}`}</h2>
                <BookingList availableTimes={availableTimes} bookedTimes={bookedTimes} />
            </section>
        </main>
    );
};

export default BookingPage;