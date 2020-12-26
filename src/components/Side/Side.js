import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import './Side.scss';

const Side = () => {
    return(
        <section className='side'>
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
        </section>
    )
}

export default Side;