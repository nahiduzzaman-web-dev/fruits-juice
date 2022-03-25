import React from 'react';
import banner from '../../images/juice.png'
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="header-title">
                        <h2 className='text-center'>Fruits <span className='juicy'>Juicy</span> Corner</h2>
                    </div>
                    <div className="header-image d-flex justify-content-center">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;