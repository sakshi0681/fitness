import React from 'react';
import './Contact.css'; 

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1 className="get-in-touch-heading">Get in Touch</h1>
      <h2 className="get-in-touch-heading">We are available</h2>
      <div className="contact-container">
        <div className="contact-info">
        <h1>Email:</h1>
         <h4>sakshisolanki2508@gmail.com</h4>
         <h1>Mobile:</h1> <h4>9165060681, 7880230681</h4>
         <h1>Address:</h1> <h4>62/3
           Near Guru Kripa Girl Hostal
           Savindnagar, Tilak Nagar, Indore,Madhya pradesh
           452018</h4>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

