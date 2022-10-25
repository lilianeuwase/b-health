import "./Team.css";
import "./How.css";
import React  from 'react';

import lili from '../images/Liliane1.png';
import lisa from '../images/Lisa1.png';
import luce from '../images/Luce1.png';
import witty from '../images/Witty1.png';


export const Team = () => {
    return (
      <section class="section " id="team">
        <div class="container ">
          <div class="columns">
            <div id='how' className='text-center how'>
              <div className='col-md-10 col-md-offset-1 section-title'>
                <h2>MEET THE TEAM EMAIL US</h2>
              </div>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img className="is-center" alt="Liliane" src={lili}/>
              </figure>
              <p>
                  <strong> Liliane Uwase</strong>
              </p>
              Software Engineer
              <h1 className='h1'>Alfagason10@gmail.com</h1>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img alt='e-health' className='is-center' src={lisa} />
              </figure>
              <p>
                  <strong> Lisa Musanubukeye</strong>
              </p>
              Guidance Support
              <h1 className='h1'>Alfagason11@gmail.com</h1>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img alt='e-health' className='is-center' src={luce} />
              </figure>
              <p>
                  <strong> Luce Mugire </strong>
              </p>
                Finances
              <h1 className='h1'>Alfagason12@gmail.com</h1>
            </div>
            <div class="column has-text-centered ">
              <figure class="image is-inline-block is-128x128 ">
                  <img alt='e-health' className='is-center' src={witty} />
              </figure>
              <p>
                  <strong> Witty Uwera </strong>
              </p>
                Relationships Manager
              <h1 className='h1'>Alfagason13@gmail.com</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
  