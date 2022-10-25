import React from 'react';
import CardItem2 from '../modules/CardItem2';
import './Services.css'
import '../pages/services/Primary.css'

import tharci from '../../images/Tharci.jpeg';
import patri from '../../images/Patricia.jpeg';
import nico from '../../images/Nicole.jpeg';
import dani from '../../images/Daniel.jpeg';
import jean from '../../images/Jean.webp';
import simon from '../../images/Simon.jpeg';
import nat from '../../images/Nat.jpeg';
import orne from '../../images/Ornella.jpeg';
import arle from '../../images/Arlene.jpeg';
import andre from '../../images/Andre.jpeg';
import noella from '../../images/Noella.webp';

function Doctors() {
  return (
    <div class="card">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                        subtitle='+250788776650 Alfagason4@gmail.com'
                        title='Dr. Arlene Nishimwe'
                        caption='Orthopedist'
                        photo ={arle}
                      />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776655 Alfagason@gmail.com'
                      title='Dr. Daniel Melka Seifu'
                      caption='Internal Medicine'
                      photo ={dani}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776654 Alfagason1@gmail.com'
                      title='Dr. Jean Paul Ndayizeye'
                      caption='Internal Medicine'
                      photo ={jean}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776653 Alfagason2@gmail.com'
                      title='Dr. Simon Pierre Bigirimana'
                      caption='General Medicine'
                      photo ={simon}
                    />
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776652 Alfagason2@gmail.com'
                      title='Dr. Natnael Shimelash'
                      caption='Primary Care and Radiologist'
                      photo ={nat}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776651 Alfagason3@gmail.com'
                      title='Dr. Ornella Masimbi'
                      caption='Primary Care and Radiologist'
                      photo ={orne}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776651 Alfagason5@gmail.com'
                      title='Dr. Tharcisse Habimana'
                      caption='Dentist'
                      photo ={tharci}
                    />
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776659 Alfagason6@gmail.com'
                      title='Dr. Patricia Oriza'
                      caption='Dermatologist'
                      photo ={patri}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776659 Alfagason9@gmail.com'
                      title='Dr. Nicole Kanyana'
                      caption='Gynecologist'
                      photo ={nico}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776656 Alfagason7@gmail.com'
                      title='Andre Ndayambaje'
                      caption='Psychiatrist'
                      photo ={andre}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                  <CardItem2
                    subtitle='+250788776657 Alfagason8@gmail.com'
                    title='Noella Ishimwe'
                    caption='Psychiatrist'
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

export default Doctors;