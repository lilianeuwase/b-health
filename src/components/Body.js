import React from 'react';
import '../App.css';
import { Button } from './modules/Button.js';
import { Link } from 'react-router-dom';
import './Body.css';

function Body() {
  return (

    <div className= 'body'>
      <div className='body-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
        <h1 className='ttl1'>YOUR HEALTH</h1>
        <h1 className='ttl2'>YOUR WEALTH</h1>
        <p>Acess to Health</p>
        <p>For Everyone</p>
        <p>From Everywhere</p>
        <div className='body-btns'>
          <Link to='/services'>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              ACCESS HEALTH <i class="fa-solid fa-notes-medical"></i>
            </Button>
          </Link>
        </div>
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
    </div>

  );
}

export default Body;
