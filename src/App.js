import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Booknow from './pages/Shopnow';
import Testride from './pages/Testride';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <div style={{marginBottom:"-4%"}} ><Header/></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testride" element={<Testride/>} />
        <Route path="/booknow" element={<Booknow/>} />
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
