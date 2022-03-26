import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import './Cart.css'

const Cart = ({ item }) => {

    return (
        <div>
            <div className='cart'>

                <div className='selected-cart'>
                    <div className='delete-btn'>
                        <div> <RiDeleteBin2Fill className='delete' /></div>
                    </div>
                    <div className='cart-info'>
                        <img src={item.picture} alt="" />
                        <p>{item.name} </p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;