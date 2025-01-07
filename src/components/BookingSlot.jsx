import React from 'react';
import './BookingSlot.css';

const BookingSlot = ({ time, isBooked }) => {
  return (
    <div className={`booking-slot ${isBooked ? 'booked' : 'available'}`}>
      {time} - {isBooked ? 'Booked' : 'Available'}
    </div>
  );
};

export default BookingSlot;