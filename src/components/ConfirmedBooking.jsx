import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state?.bookingDetails;

  const handleBack = () => {
    navigate('/');
  };

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  return (
    <div className="confirmed-booking">
      <header>
        <h1>Booking Confirmed!</h1>
      </header>
      <article className="booking-details">
        <p><strong>Date:</strong> {bookingDetails.date}</p>
        <p><strong>Time:</strong> {bookingDetails.time}</p>
        <p><strong>Guests:</strong> {bookingDetails.guests}</p>
        <p><strong>Occasion:</strong> {bookingDetails.occasion}</p>
      </article>
      <button className="back-button" onClick={handleBack}>Back to Home</button>
    </div>
  );
};

export default ConfirmedBooking;