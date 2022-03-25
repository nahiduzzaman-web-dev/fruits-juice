import React from 'react';

const Fruit = (props) => {
    console.log(props);
    const { picture, name, price } = props.fruit;
    return (
        <div>

        </div>
    );
};

export default Fruit;