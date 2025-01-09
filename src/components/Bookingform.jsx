import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, formData, handleChange, handleSubmit, dispatch }) => {
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = formData.date && formData.time && formData.guests > 0 && formData.occasion;
        setIsFormValid(isValid);
    }, [formData]);

    const handleDateChange = (e) => {
        handleChange(e);
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Booking Details</legend>
                <div className="form-group">
                    <label htmlFor="date">Choose a date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Choose a time:</label>
                    <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                        {availableTimes && availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
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
                </div>
                <div className="form-group">
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
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Make Your reservation"
                        disabled={!isFormValid}
                        className={isFormValid ? 'enabled' : 'disabled'}
                    />
                </div>
            </fieldset>
        </form>
    );
};

export default BookingForm;