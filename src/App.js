import React from 'react';
import { StyledApp, StyledImg, GlobalStyle } from './App.styled.js';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ForestImage from './ForestImage.jpeg'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Router>
        <Navbar />
        <StyledImg src={ForestImage} alt="Forest Image"></StyledImg>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
