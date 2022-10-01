import React from 'react';
import '../App.css';
import './Hero.css';


function Hero() {
  return (
    <div className='hero-container'>
      <div className='photos-container'>
        <img alt='the future' className='photo1' src='images/bw-p1.jpeg' />
        <p class="text1">THE FUTURE OF</p>
        <img alt='e-health' className='photo2' src='images/bw-p2.jpeg' />
        <p class="text2">E-HEALTH</p>
      </div>
      <div class="line3"></div>
      <div class="line4"></div>
    </div>
  );
}

export default Hero;