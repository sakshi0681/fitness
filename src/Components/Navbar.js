import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/members">Membership</Link></li>
        <li className="auth-links">
          <Link to="/login">Login</Link>
        </li>
        <li className="auth-links2">
          <Link to="/signup">Signup</Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
