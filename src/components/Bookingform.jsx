import React, { useState, useEffect } from 'react';
import BookingSlot from './BookingSlot';
import './BookingForm.css';

const BookingForm = ({ availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'], updateTimes }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: ''
  });

  useEffect(() => {
    console.log('BookingForm availableTimes:', availableTimes); // Log availableTimes to check if it is passed correctly
    console.log('BookingForm updateTimes:', updateTimes);
  }, [availableTimes, updateTimes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Change detected: ${name} = ${value}`); // Debug
    setFormData({ ...formData, [name]: value });
  
    if (name === 'date') {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select time</option>
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
      <div className="booking-slots">
        {availableTimes && availableTimes.map((time, index) => (
          <BookingSlot key={index} time={time} isBooked={false} />
        ))}
      </div>
    </form>
  );
};

export default BookingForm;