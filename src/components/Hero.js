import React from 'react';
import '../App.css';
import './Hero.css';

import photo1 from '../images/bw-p1.jpeg';
import photo2 from '../images/bw-p2.jpeg';


function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child">
                <p class="title text1">THE FUTURE OF</p>
                <img alt='the future' className='photo1' src={photo1} />
              </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child">
              <img alt='e-health' className='photo2' src={photo2} />
              <p class="title text1">E-HEALTH</p>
            </div>
          </div>
        </div>
        {/* <div className='photos-container'>
          <img alt='the future' className='photo1' src='images/bw-p1.jpeg' />
          <p class="text1">THE FUTURE OF</p>
          <img alt='e-health' className='photo2' src='images/bw-p2.jpeg' />
          <p class="text2">E-HEALTH</p>
        </div> */}
      </div>
      <div class="line3"></div>
      <div class="line4"></div>
    </div>
  );
}

export default Hero;