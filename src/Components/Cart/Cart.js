import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import './Cart.css'

const Cart = ({ item }) => {
    function deleteHandle(id) {

        document.getElementById(id).style.display = 'none'

    }
    return (
        <div>
            <div className='cart' id={item.id}>

                <div className='selected-cart'>
                    <div className='delete-btn'>
                        <div> <RiDeleteBin2Fill className='delete' id='delete' onClick={() => deleteHandle(item.id)} /></div>
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