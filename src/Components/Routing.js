import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import './Navbar.css'

function Routing() {
  return (
    <div>
      <nav></nav>
    
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routing