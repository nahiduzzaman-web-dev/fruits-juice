import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const [fruitsJuice, setFruitsJuice] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruitsJuice(data))
    }, []);

    // cart handle
    const handleAddToCat = (fruit) => {
        const newCart = [...cart, fruit];
        setCart(newCart)
    }

    return (
        <div>
            <div className='main-container'>
                <div className="fruits-container">
                    {
                        fruitsJuice.map(fruit => <Fruit
                            key={fruit.id}
                            fruitData={fruit}
                            handleAddToCat={handleAddToCat}
                        ></Fruit>)
                    }
                </div>
                <div className='cart-container'>
                    <h5>Your Selected Juice Items</h5> <br />
                    {
                        cart.map(juiceItem => <Cart
                            key={juiceItem.id}
                            item={juiceItem}
                        ></Cart>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Fruits;