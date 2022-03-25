import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import './Fruit.css'

const Fruit = ({ fruitData, handleAddToCat }) => {

    const { picture, name, price } = fruitData;


    return (
        <div className='fruit'>
            <img src={picture} alt="..." />
            <div className="juice-info">
                <p className='juice-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCat(fruitData)} className='btn-cart'>
                <p className='btn-text'>Add To Cart <GiShoppingCart className='cart-icon' /></p>
            </button>
        </div>
    );
};

export default Fruit;