// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home'; 
import About from './Components/AboutPage/About'; 
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact'; 
import Members from './Members/Members';
import LoginForm from './Components/Forms/Login';
import SignUpForm from './Components/Forms/Signup/Signup';
import Popup from './Components/Popup/Popup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Popup/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path='/members' element={<Members/>}/>
          <Route path='Login' element={<LoginForm/>} />
          <Route path='signup' element={<SignUpForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
