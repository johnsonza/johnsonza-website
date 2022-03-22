import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/resume" exact element={<Resume />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
