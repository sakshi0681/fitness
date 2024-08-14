import React, { useState } from 'react';
import './Popup.css'; // You can style your popup in this CSS file

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true to show the popup
  
  // Function to close the popup
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClose}>X</button>
            <div className="popup-inner">
              <img className="popup-image" src="/assets/images/img2.png" alt="Placeholder" />
              <div className="popup-text">
              <p>
                  <span className="black">BEING</span> 
                  <span className="blue">BODY</span>
                </p>
                <p>
                  <span className="gray">BUILDER</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
