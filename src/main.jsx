import { StrictMode, useState } from 'react';
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
import BookingForm from './components/BookingForm';

const App = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  return (
    <div className="page-container">
      <Nav />
      <Routes>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} />} />
        <Route path="/*" element={<MainRoutes availableTimes={availableTimes} />} />
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
