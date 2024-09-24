// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'; // Check this path
import Landing from './pages/Landing'; // Check this path
import Home from './pages/Home'; // Check this path
import About from './pages/About'; // Check this path
import Services from './pages/Services'; // Check this path
import Projects from './pages/Projects'; // Check this path
import Team from './pages/Team'; // Check this path
import Contact from './pages/Contact'; // Check this path

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
