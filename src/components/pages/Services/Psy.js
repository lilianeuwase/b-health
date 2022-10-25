import React from 'react';
import CardItem2 from '../../modules/CardItem2';
import Leftbar from '../../modules/Leftbar';
import '../Services.css';
import './Primary.css';
import './Dentist.css';

import andre from '../../../images/Andre.jpeg';
import noella from '../../../images/Noella.webp';

function Psy() {
  return (
    <div class="card">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
            <div class="tile">
                <div class="tile is-parent left-bar1 is-vertical">
                    <Leftbar/>
                </div>
                <div class="tile is-8 is-vertical">
                    <div class="tile">
                        <div class="tile is-5 is-parent">
                            <article class="tile is-child">
                                <CardItem2
                                    subtitle='+250788776656 Alfagason7@gmail.com'
                                    title='Andre Ndayambaje'
                                    caption='Rwanda'
                                    photo ={andre}
                                />
                            </article>
                        </div>
                        <div class="tile is-5 is-parent">
                            <article class="tile is-child">
                                <CardItem2
                                    subtitle='+250788776657 Alfagason8@gmail.com'
                                    title='Noella Ishimwe'
                                    caption='Rwanda'
                                    photo ={noella}
                                />
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Psy;