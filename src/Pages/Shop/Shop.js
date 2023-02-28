import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map(product=>
            <Product
            key={product.id}
            product={product}
            ></Product>)
            }
        </div>
    );
};

export default Shop;