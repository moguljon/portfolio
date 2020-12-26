import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.scss';
import Side from '../Side/Side';
import OtherNav from '../OtherNav/OtherNav';

import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import face from '../../img/resized2.jpeg';
import './Resume.scss';

const Resume = () => {
    return(
        <section className='section-resume'>
            <header className='header'>
                <nav className='header__nav'>
                    <Side />
                    <div className='resume'>
                        <div className='row'>
                            <h2 className='secondary'>Education</h2>
                            <div className='col-1-of-2'>
                                <div className='resume__content'>
                                    <h3 className='resume__title'>
                                        Bachelor of Arts
                                    </h3>
                                    <p className='resume__paragraph'>
                                        Newark, NJ
                                    </p>
                                    <p className='resume__paragraph2'>
                                        Session: 2015-2019
                                    </p>
                                </div>
                            </div>
                            <div className='col-1-of-2'>
                                <div className='resume__content'>
                                    <h3 className='resume__title'>
                                        Assoicate of Arts
                                    </h3>
                                    <p className='resume__paragraph'>
                                        Cranford, NJ
                                    </p>
                                    <p className='resume__paragraph2'>
                                        Session: 2012-2015
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <h2 className='secondary'>Experience</h2>
                            <div className='col-1-of-2'>
                                <div className='resume__content'>
                                    <h3 className='resume__title'>
                                        Paperless Solutions
                                    </h3>
                                    <p className='resume__paragraph'>
                                        Rahway, NJ
                                    </p>
                                    <p className='resume__paragraph2'>
                                        Document Specialist 
                                    </p>
                                    <p className='resume__paragraph2'>
                                        Dec 2019 - Current
                                    </p>
                                </div>
                            </div>
                            <div className='col-1-of-2'>
                                <div className='resume__content'>
                                    <h3 className='resume__title'>
                                        Self Employed - <a href='https://webstudios.io/' target='_blank' rel="noreferrer"> Web Studios</a>
                                    </h3>
                                    <p className='resume__paragraph'>
                                        Elizabeth, NJ
                                    </p>
                                    <p className='resume__paragraph2'>
                                        Freelance Web Developer
                                    </p>
                                    <p className='resume__paragraph2'>
                                        Nov 2020 - Current
                                    </p>
                                </div>
                            </div>
                        </div>
                      

                    </div>

                </nav>
            </header>
        </section>
    )
}

export default Resume;