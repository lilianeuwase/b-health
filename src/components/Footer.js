import React from 'react';
import './Footer.css';
import { Button } from './modules/Button';
import { Link } from 'react-router-dom';





function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          LET US JOIN FORCE TO ELEVATE AFRICA'S HEALTH
        </p>
        <p className='footer-subscription-text'>
          You can email us at any time for suggestions/concerns.
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <a href='#how' className='page-scroll'>
                How It Works
              </a>
            <a href='#about' className='page-scroll'>
                About Us
              </a>
              <a href='#team' className='page-scroll'>
                Meet The Team
              </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              BOH
              <i class="fa-solid fa-notes-medical" />
            </Link>
          </div>
          <small class='website-rights'>BOH © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/docir.lilian250'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
              </a>
              <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/lil_wase/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCrfDW3QBP0SX5YSejqlcplA'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/docir_lilian'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/liliane-uwase-907830163/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
