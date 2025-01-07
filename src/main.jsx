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

const initialState = [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    case 'INITIALIZE_TIMES':
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (date) => {
    const newTimes = [
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
    dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
  };

  const initializeTimes = () => {
    dispatch({ type: 'INITIALIZE_TIMES' });
  };

  return (
    <div className="page-container">
      <Nav />
      <Routes>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />} />
        <Route path="/*" element={<MainRoutes />} />
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