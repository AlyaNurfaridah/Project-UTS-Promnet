import React from 'react';
import './Style.css';
import myphoto from"../Assets/images/Alya.jpeg";

function Home() {

  return (
    <div className='opening'>
      <div className="about-image">
            <img src={myphoto} alt="My Photo" />
        </div>
      <h2>Hello, welcome!</h2>
      <h3>On this web you will get to know a little about me</h3>
    </div>
  );
}

export default Home;

