import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
    const availableTimes = ['18:00', '19:00', '20:00'];
    const formData = {
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    };
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    test('renders BookingForm heading', () => {
        render(
            <BookingForm
                availableTimes={availableTimes}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                dispatch={dispatch}
            />
        );
        const headingElement = screen.getByText(/Booking Details/i);
        expect(headingElement).toBeInTheDocument();
    });
});