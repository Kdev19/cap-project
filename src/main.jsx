import { StrictMode, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import BookingPage from './components/BookingPage';
import MainRoutes from './components/MainRoutes';
import ConfirmedBooking from './components/ConfirmedBooking';

// Import the fetchAPI function from the local script
import { fetchAPI } from './api';

// Update initializeTimes function to use fetchAPI
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Update updateTimes function to use fetchAPI with the dispatched selected date
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

const App = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="page-container">
      <Nav />
      <Routes>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/*" element={<MainRoutes availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
      <Footer />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
