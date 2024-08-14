import React from 'react';
import './About.css'; 

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="image-container-about">
          <img src="/assets/images/img1.jpg" alt="Example" className="about-image" />
        </div>
        <div className="about-content">
          <h1>About me</h1>
          <h3 className='about-content'>I am a Gym Trainer <br />
            From Indore, doing gym is good for a healthy <br /> 
            life. It helps our body to stay fit and releases stress <br /> 
            from our mind. Doing gym is good for a healthy life. <br />
            It helps our body to fit and releases stress from our mind. <br />
            From Indore, doing gym is good for a healthy life.</h3>
          <button className="button">Click Me</button>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h1>About me</h1>
          <h3 className='about-content'>I am a Gym Trainer <br />
            From Indore, doing gym is good for a healthy <br /> 
            life. It helps our body to stay fit and releases stress <br /> 
            from our mind. Doing gym is good for a healthy life. <br />
            It helps our body to fit and releases stress from our mind. <br />
            From Indore, doing gym is good for a healthy life.</h3>
          <button className="button">Click Me</button>
        </div>
        <div className="image-container-about">
          <img src="/assets/images/trianer.jpg" alt="Example" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
