import { initializeTimes, updateTimes } from './main';
import { fetchAPI } from './api';
import * as React from 'react';

// Mock the fetchAPI function
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
}));

// Mock the createRoot function
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('initializeTimes', () => {
  beforeEach(() => {
    // Set up a DOM element as a render target
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
  });

  afterEach(() => {
    // Clean up the DOM
    document.body.innerHTML = '';
  });

  it('should call fetchAPI with the current date', () => {
    const mockDate = new Date(2023, 1, 3); // 3rd February 2023
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(mockDate);

    global.Date.mockRestore();
  });
});

describe('updateTimes', () => {
  it('should call fetchAPI with the dispatched selected date', () => {
    const mockDate = new Date(2023, 1, 3); // 3rd February 2023
    const action = { type: 'UPDATE_TIMES', payload: mockDate };
    
    updateTimes([], action);

    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
  });
});