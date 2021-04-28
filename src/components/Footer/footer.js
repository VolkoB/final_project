import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-column'>
                    <h2 className='footer-column__heading'>Cielo Apparel</h2>
                    <a href='#home' className='footer-column__heading_item'>HOME</a>
                    <a href='#shop' className='footer-column__heading_item'>SHOP</a>
                    <a href='#about' className='footer-column__heading_item'>ABOUT</a>
                    <a href='#forum' className='footer-column__heading_item'>FORUM</a>
                    <a href='#contact' className='footer-column__heading_item'>CONTACT</a>
                </div>
                <div className='footer-column'>
                    <h2 className='footer-column__heading'>Explore</h2>
                    <a href='#FAQ' className='footer-column__heading_item'>FAQ</a>
                    <a href='#shipping' className='footer-column__heading_item'>Shipping & Returns</a>
                    <a href='#policy' className='footer-column__heading_item'>Store Policy</a>
                    <a href='#payment' className='footer-column__heading_item'>Payment Methods</a>
                </div>
                <div className='footer-column'>
                    <h2 className='footer-column__heading'>Join our Newsletter</h2>
                    <p>
                        <input type="text" placeholder='Enter your email here'/>
                        </p>
                    <hr className='line'></hr>
                    <button className='subscribe-button'>Subscribe Now</button>
                </div>
                <div className='footer-column'>
                    <h2 className='footer-column__heading'>Follow Us</h2>
                    <a href='#Facebook' className='footer-column__heading_item'>Facebook</a>
                    <a href='#Twitter' className='footer-column__heading_item'>Twitter</a>
                    <a href='#Instagram' className='footer-column__heading_item'>Instagram</a>
                    <a href='#Pinterest' className='footer-column__heading_item'>Pinterest</a>
                </div>
            </div>
                
        </footer>
    );
}

export default Footer;