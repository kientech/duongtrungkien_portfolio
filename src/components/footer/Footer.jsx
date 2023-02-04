import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
                Kien TD
            </h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/duongtrungkien0406/" className="home__social-icon" target={'_blank'}>
            <i class="uil uil-facebook-f"></i>
        </a>

        <a href="https://github.com/codingwithkien" className="home__social-icon" target={'_blank'}>
            <i class="uil uil-github-alt"></i>
        </a>

        <a href="https://www.instagram.com/duongtrungkien__2003/" className="home__social-icon" target={'_blank'}>
            <i class="uil uil-instagram"></i>
        </a>

        <a href="https://www.youtube.com/@codingwithkien/" className="home__social-icon" target={'_blank'}>
            <i class="uil uil-youtube"></i>
        </a>
            </div>
        </div>

        <span className="footer__copy">
            &#169; 2023 Duong Trung Kien. All rights reserved
        </span>
    </footer>
  )
}

export default Footer
