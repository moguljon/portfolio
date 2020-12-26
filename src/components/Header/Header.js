import React from 'react';
import './Header.scss';
import Side from '../Side/Side';
import OtherNav from '../OtherNav/OtherNav';

const Header = () => {
    return(
        <div>
            <header className='header'>
                <nav className='header__nav'>
                    <Side />
                    <OtherNav />
                </nav>
            </header>
        </div>
    )
}

export default Header;