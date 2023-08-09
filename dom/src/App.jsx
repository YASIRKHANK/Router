
import './App.css'
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Qari from './pages/Qari';
import Counter from './Components/Counter';







function App() {
  
  return (
    <>
      <Router>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/qari' element={<Qari/>}></Route>
          <Route path='/counter' element={<Counter/>}></Route>
        </Routes>
      </Router>

   
    </>
  );
}

export default App;
