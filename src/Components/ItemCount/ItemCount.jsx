/* eslint-disable react/prop-types */
import { useState } from 'react'

const ItemCount = ({ stock, handleOnAdd }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0 && count <= stock) {
            handleOnAdd(count);
        }
    };

    return (
        <div className='p-3'>
            <button onClick={handleDecrement} className='btn border'>-</button>
            <span className='p-3'>{count}</span>
            <button onClick={handleIncrement} className='btn border'>+</button>
            <button onClick={handleAddToCart} className='btn btn-success mx-3'>Añadir al carrito</button>
        </div>
    );
};

export default ItemCount;