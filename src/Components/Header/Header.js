import React from 'react';
import banner from '../../images/juice.png'
import { GiPlainArrow } from 'react-icons/gi';
import './Header.css'

const Header = () => {
    return (

        <div className="header-container">
            <div className='banner'>
                <h2>Fruits <span className='juicy'>Juicy</span> Corner</h2>
                <div className='banner-details'>
                    <p className='offer'> ---- 50% OFF FOR ALL JUICE</p>
                    <p>Pure Juice from natural fruits. <br />Pure Juicy, Buy It & Drink It</p>
                    <p>To Buy - Scrol Down <GiPlainArrow /></p>
                </div>
            </div>
            <div className="banner-poster">
                <img src={banner} alt="" />
            </div>
        </div>

    );
};

export default Header;