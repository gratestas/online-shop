import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo' />
        </Link>
        <div className='nav'>
            <Link className='nav-item' to='/shop'> SHOP </Link>
            <Link className='nav-item' to='/shop'> CONTACT </Link>
        </div>
    </div>
)

export default Header;