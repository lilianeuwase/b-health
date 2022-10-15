import React from 'react';
import CardItem2 from '../modules/CardItem2';
import './Services.css'
import '../pages/services/Primary.css'


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
                        photo ={require('../../images/Arlene.jpeg')}
                      />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776655 Alfagason@gmail.com'
                      title='Dr. Daniel Melka Seifu'
                      caption='Internal Medicine'
                      photo ={require('../../images/Daniel.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776654 Alfagason1@gmail.com'
                      title='Dr. Jean Paul Ndayizeye'
                      caption='Internal Medicine'
                      photo ={require('../../images/Jean.webp')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776653 Alfagason2@gmail.com'
                      title='Dr. Simon Pierre Bigirimana'
                      caption='General Medicine'
                      photo ={require('../../images/Simon.jpeg')}
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
                      photo ={require('../../images/Nat.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776651 Alfagason3@gmail.com'
                      title='Dr. Ornella Masimbi'
                      caption='Primary Care and Radiologist'
                      photo ={require('../../images/Ornella.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776651 Alfagason5@gmail.com'
                      title='Dr. Tharcisse Habimana'
                      caption='Dentist'
                      photo ={require('../../images/Tharci.jpeg')}
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
                      photo ={require('../../images/Patricia.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776659 Alfagason9@gmail.com'
                      title='Dr. Nicole Kanyana'
                      caption='Gynecologist'
                      photo ={require('../../images/Nicole.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      subtitle='+250788776656 Alfagason7@gmail.com'
                      title='Andre Ndayambaje'
                      caption='Psychiatrist'
                      photo ={require('../../images/Andre.jpeg')}
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                  <CardItem2
                    subtitle='+250788776657 Alfagason8@gmail.com'
                    title='Noella Ishimwe'
                    caption='Psychiatrist'
                    photo ={require('../../images/Noella.webp')}
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