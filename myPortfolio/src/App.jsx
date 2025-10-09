import React from 'react';
import Navbar from '../src/components/header/navbar';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="*"
          element={<div className="p-10 text-center text-2xl">404 - Page Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
