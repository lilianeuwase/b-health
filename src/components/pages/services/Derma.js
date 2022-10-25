import React from 'react';
import CardItem2 from '../../modules/CardItem2';
import Leftbar from '../../modules/Leftbar';
import '../Services.css';
import './Primary.css';
import './Dentist.css';

import patri from '../../../images/Patricia.jpeg';

function Derma() {
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
                <div class="tile is-6 center is-parent">
                  <article class="tile is-child">
                  <CardItem2
                    subtitle='+250788776659 Alfagason6@gmail.com'
                    title='Dr. Patricia Oriza'
                    caption='Kenya'
                    photo ={patri}
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

export default Derma;