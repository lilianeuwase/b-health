import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Body.css';

function Body() {
  return (
    <div className='body-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1 className='ttl1'>YOUR HEALTH</h1>
      <h1 className='ttl2'>YOUR WEALTH</h1>
      <p>Acess to Health</p>
      <p>For Everyone</p>
      <p>From Everywhere</p>
      
      
      <div class="line1"></div>
      <div class="line2"></div>
      

      {/* <div className='body-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}

      
    </div>
    

  );
}

export default Body;
