import React from 'react';
import banner from '../../images/juice.png'
import { GiPlainArrow } from 'react-icons/gi';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="header-title d-flex justify-content-start mt-5">
                        <div>
                            <h2>Fruits <span className='juicy'>Juicy</span> Corner</h2>
                            <p className='offer'> ---- 50% OFF FOR ALL JUICE</p>
                            <p>Pure Juice from natural fruits. <br />Pure Juicy, Buy It & Drink It</p>
                            <p>To Buy - Scrol Down <GiPlainArrow /></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="header-image d-flex justify-content-center">
                        <img className='img-fluid' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;