import React from 'react';
import './Cart.css'

const Cart = ({ item }) => {

    return (
        <div>
            <div className='cart'>
                <div className='selected-cart'>
                    <img src={item.picture} alt="" />
                    <p>{item.name} </p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;