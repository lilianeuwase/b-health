import React from 'react';
import '../App.css';
import './Hero.css';


function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
                <p class="title">THE FUTURE OF</p>
                <img alt='the future' className='photo1' src='images/bw-p1.jpeg' />
              </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <img alt='e-health' className='photo2' src='images/bw-p2.jpeg' />
              <p class="title">E-HEALTH</p>
            </div>
          </div>
        </div>
        {/* <div className='photos-container'>
          <img alt='the future' className='photo1' src='images/bw-p1.jpeg' />
          <p class="text1">THE FUTURE OF</p>
          <img alt='e-health' className='photo2' src='images/bw-p2.jpeg' />
          <p class="text2">E-HEALTH</p>
        </div> */}
        <div class="line3"></div>
        <div class="line4"></div>
      </div>
    </div>
  );
}

export default Hero;