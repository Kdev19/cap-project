import React, { useReducer, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainRoutes from './components/MainRoutes';
import BookingPage from './components/BookingPage';

const initialState = [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

const reducer = (state, action) => {
  console.log('Reducer action:', action); // Debug logs
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    case 'INITIALIZE_TIMES':
      return initialState;
    default:
      return state;
  }
};

const initializeTimes = () => {
  return initialState;
};

const updateTimes = (date) => {
  console.log('Updating times for date:', date); // Debug
  const newTimes = initialState.filter(time => time !== '19:00'); // Example logic
  return newTimes;
};

function App() {
  const [availableTimes, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('App availableTimes:', availableTimes);
  }, [availableTimes]);

  const handleUpdateTimes = (date) => {
    const updatedTimes = updateTimes(date);
    console.log('App handleUpdateTimes:', updatedTimes);
    dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes });
  };

  console.log('Passing to BookingPage:', { availableTimes, handleUpdateTimes });

  return (
    <div className="page-container">
      <Nav />
      <Routes>
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              updateTimes={handleUpdateTimes} 
            />
          } 
        />
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);