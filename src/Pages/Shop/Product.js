import React from 'react';

const Product = ({ product }) => {
    const { name, img, seller, price, ratings } = product;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}!</h2>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>    <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;