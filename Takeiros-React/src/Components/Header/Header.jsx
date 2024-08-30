import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {



    return (
            <div className='feature-photo'>
                <div className='title'>
                    <h1>Takeiros Mex-Food</h1>
                </div>
                <div className='buttons'>
                    <a href='' className='order-online-button'>Order Online</a>
                    <Link to='/Menu' className='view-menu-button'>View Menu</Link>
                </div>
            </div>
    );
}

export default Header;