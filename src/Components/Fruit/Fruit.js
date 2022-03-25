import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import './Fruit.css'

const Fruit = (props) => {
    console.log(props);
    const { picture, name, price } = props.fruit;
    return (
        <div className='fruit'>
            <img src={picture} alt="..." />
            <div className="juice-info">
                <p className='juice-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add To Cart <GiShoppingCart className='cart-icon' /></p>
            </button>
        </div>
    );
};

export default Fruit;