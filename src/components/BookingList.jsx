import React from 'react';
import BookingSlot from './BookingSlot';
import './BookingList.css';

const BookingList = ({ availableTimes, bookedTimes }) => {
  return (
    <div className="booking-list">
      {availableTimes.map((time, index) => (
        <BookingSlot key={index} time={time} isBooked={bookedTimes.includes(time)} />
      ))}
    </div>
  );
};

export default BookingList;