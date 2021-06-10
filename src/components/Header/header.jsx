import React from 'react';
import './header.scss';

function Header(props) {
    return (
        <header className='header'>
            <div className='discount'>Get 15% OFF - Use Coupon Code CIELO<hr className="underline"/></div>
            
            <div className='container'>
                <a href='#home'>       
                        <h2 className='header-logo__name'>Cielo Apparel</h2>
                        </a> 
                <nav className='header-menu'>
                    <a href='#home' className='header-menu__item'>HOME</a>
                    <a href='#shop' className='header-menu__item'>SHOP</a> 
                    <a href='#about' className='header-menu__item'>ABOUT</a> 
                    <a href='#contact' className='header-menu__item'>CONTACT</a> 
                </nav>

                <button className='header-button__login'>
                    Login
                </button>
                
                <button className='header-button__cart'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 329.7 134.5" data-hook="svg-icon-6"><path class="ex_uq" d="M281.6 3c35.7 10.7 56 47.6 45.2 83.3s-47.6 56-83.3 45.2c-35.7-10.7-56-47.6-45.2-83.3C209 13.1 245.9-7.2 281.6 3z"></path><text x="265" y="69" dy=".35em" text-anchor="middle" class="_2u__n" data-hook="items-count">0</text><path d="M74.1 134.4c-8.7 0-16.2-7.4-16.2-16.2S65.3 102 74.1 102s16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zM120.5 134.5c-8.7 0-16.2-7.4-16.2-16.2s7.4-16.2 16.2-16.2 16.2 7.4 16.2 16.2-7.4 16.2-16.2 16.2zm0-21.7c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6z"></path><path d="M141.2 92.1L53.5 92.1 23 10.6 0 10.6 0 0 30.4 0 61.2 81.6 133.5 81.6 152.4 30.4 38.5 30.4 34.8 19.9 167.9 19.9z"></path></svg>
                </button>
            </div>
            
        </header>
    );
}

export default Header;