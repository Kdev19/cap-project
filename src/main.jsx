import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Herosection from './components/Herosection';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="page-container">
        <Nav />
        <Herosection />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
