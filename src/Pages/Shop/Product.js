import React, { useContext, useState } from 'react';
import { CartContext } from '../../App';

const Product = ({ product }) => {
    // const [cart,setCart] = useState([]);
    const { name, img, seller, price, ratings } = product;
    const [cart,handleAddToCart] = useContext(CartContext);
   
    return (
        <div 
        className="card  bg-base-100 shadow-xl h-[600px]">
            <figure><img src={img} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}!</h2>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>    <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(product)} className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;