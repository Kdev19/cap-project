import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />

    <Highlights />

    <Testimonials />

    <About />

    <Footer />
  </StrictMode>,
)
