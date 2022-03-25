import React, { useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const [fruitsJuice, setFruitsJuice] = useState([]);
    useState(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruitsJuice(data))
    }, [])
    return (
        <div className='main-container'>
            <div className="fruits-container">
                {
                    fruitsJuice.map(fruit => <Fruit
                        key={fruit.id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>
            <div className='cart-container'>
                <p>cart container</p>
            </div>
        </div>

    );
};

export default Fruits;