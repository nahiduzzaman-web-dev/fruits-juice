import React, { useState } from 'react';
import Fruit from '../Fruit/Fruit';

const Fruits = () => {
    const [fruitsJuice, setFruitsJuice] = useState([]);
    useState(() => {
        fetch('fruits.json')
            .then(res => res.json())
            .then(data => setFruitsJuice(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-9">
                    <div className="fruits-container">
                        {
                            fruitsJuice.map(fruit => <Fruit
                                key={fruit.id}
                                fruit={fruit}
                            ></Fruit>)
                        }
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>

        </div>
    );
};

export default Fruits;