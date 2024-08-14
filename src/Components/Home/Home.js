// import React from 'react'

// function Home() {
//   return (
//     <div className='container'>
//         <div className='home'>
//         <div>
//             <img src="/assets/images2/banner.png" alt="image not found" />
//         </div>
//         <div>
//             <p>I am a </p>
//             <h1> Gym trainer</h1>
//             <p>From Indore,doing gym is good for <br /> healthy life. it helps our body to fit. it<br /> release stress from our mind. </p>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="homecontainer">
      <div className="image-container-home">
        <img src="/assets/images2/banner.png" alt="Example" className="image-home" />
      </div>
      <div className="content-home">
        <h3>I am a </h3>
        <h1> Gym trainer</h1>
        <h3>From Indore,doing gym is good for <br /> healthy life. it helps our body to fit. it<br /> release stress from our mind. </h3>
        <button className="button">Click Me</button>
      </div>
    </div>
  );
}

export default Home;

