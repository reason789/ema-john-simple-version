import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const[products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) =>{
       // console.log("clicked",product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div class="container">
            <div class="product-container"> 
                    {
                        products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd}></Product>)
                    }
            </div>
            <div class="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;