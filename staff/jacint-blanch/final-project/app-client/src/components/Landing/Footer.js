import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
          Our mission is simple: to protect and comfort people so they can live freely
          </p>
          <div className='input-areas'>
            <form>
              <Button buttonStyle='btn--outline'>Sign In</Button>
            </form>
          </div>
        </section>
      
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                Safetyium
                <i className='fab fa-typo3' />
              </Link>
            </div>
            <small className='website-rights'>Safetyium © 2020</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                to='https://www.neoland.es/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  

export default Footer