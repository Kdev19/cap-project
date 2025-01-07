import React from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, formData, handleChange }) => {
    console.log('availableTimes:', availableTimes); // Log the availableTimes prop

    return (
        <form className="booking-form">
            <label htmlFor="date">Choose a date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <label htmlFor="time">Choose a time:</label>
            <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                {availableTimes && availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                placeholder="1"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
                required
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
            >
                <option value="">Select occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;