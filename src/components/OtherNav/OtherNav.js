import React from 'react';
import Side from '../Side/Side';
import face from '../../img/resized2.jpeg';
import './OtherNav.scss';
import { Link } from 'react-router-dom';

const OtherNav = () => {
    return(
        <section className='section-otherNav'>
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
                            <Link to='/resume' className='btn btn-main'>Resume</Link>
                            <a href='##' className='btn btn-ghost'>Projects</a>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default OtherNav;