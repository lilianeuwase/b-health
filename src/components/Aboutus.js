import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <section class="section " id="aboutus">
        <div class="container ">
            <div class="columns">
                <div class="column is-5 has-text-centered">
                    <h1 class="title ">
                        <p>
                            About Us
                        </p>
                    </h1>
                    <p class="subtitle ">
                        <p> We are working together to elevate Africa's e-Health by educating Africans and offering e-Health services from some of the best doctors in Africa
                        </p>

                    </p>
                </div>
                <div class="column has-text-centered ">
                    <figure class="image is-inline-block is-128x128 ">
                        <img className="is-center " src={require('../images/Head_Picture.png')}/>
                    </figure>
                    <p>
                        <strong> Liliane Uwas</strong>
                    </p>
                    Software Engineer
                    <h1 className='h1'>Alfagason10@gmail</h1>
                </div>
                <div class="column has-text-centered ">
                    <figure class="image is-inline-block is-128x128 ">
                        <img alt='e-health' className='is-center' src={require('../images/Lisa.png')} />
                    </figure>
                    <p>
                        <strong> Monalisa Musanubukeye</strong>
                    </p>
                    Guidance Support
                    <h1 className='h1'>Alfagason11@gmail</h1>
                </div>
                <div class="column has-text-centered ">
                    <figure class="image is-inline-block is-128x128 ">
                        <img alt='e-health' className='is-center' src={require('../images/Lisa.png')} />
                    </figure>
                    <p>
                        <strong> Monalisa Musanubukeye</strong>
                    </p>
                    Guidance Support
                    <h1 className='h1'>Alfagason11@gmail</h1>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Aboutus;
