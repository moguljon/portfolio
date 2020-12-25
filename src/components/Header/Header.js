import React from 'react';
import './Header.scss';
import face from '../../img/resized2.jpeg';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


const Header = () => {
    return(
        <div>
            
            <div className='hamburger-icon'>
            <i className="fas fa-bars"></i>
            </div>
            <header className='header'>
                <nav className='header__nav'>
                    <div className='header__container'>
                        <div className='header__logo-container'>
                            <p className='header__brand'>J<span className='brand2'>&mdash;A</span></p>
                        </div>
                        <div className='header__info-box'>
                            <h4 className='header__heading4'>Email</h4>
                            <p className='header__paragraph'>jonathanaguilar@moguljon.com</p>
                            <h4 className='header__heading4'>Phone</h4>
                            <p className='header__paragraph'>908-937-0191</p>
                            <h4 className='header__heading4'>Find me on</h4>
                            <div className='header__social'>
                                <div className='header__social-icons'>
                                    <IoLogoInstagram className='icons' />
                                </div>
                                <div className='header__social-icons'>
                                    <IoLogoGithub className='icons' />
                                </div>
                                <div className='header__social-icons'>
                                    <IoLogoLinkedin className='icons' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className='main'>
                        <div className='main__container'>
                            <div className='main__img-container'>
                                <img src={face} alt='faceshot' className='main__img' />

                            </div>
                            
                            <div className='main__info'>
                                <div className='main__info-container'>
                                    <h1 className='main__header-1'>Jonathan <span className='main__info-span'>Aguilar</span></h1>
                                    <p className='main__paragraph'>Founder of Web Studios</p>
                                    <p className='main__paragraph2'>I am from Elizabeth, NJ and I have a passion for Tech. I am an aspiring software engineer available to work now!</p>
                                </div>
                            
                                <div className='main__btn-container'>
                                    <a href='##' className='btn btn-main'>Resume</a>
                                    <a href='##' className='btn btn-ghost'>Projects</a>
                                </div>
                            </div>
                        </div>
                    </main>
                </nav>
            </header>
        </div>
    )
}

export default Header;