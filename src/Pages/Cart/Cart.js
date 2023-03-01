import React, { useContext } from 'react';
import { CartContext } from '../../App';

const Cart = () => {
    const [cart] = useContext(CartContext)
    return (
        <div>
            <h2>This is {cart.length}</h2>
        </div>
    );
};

export default Cart;