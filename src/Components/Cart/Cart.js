import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    //console.log(cart)
    //let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const newProduct = cart[i];
    //     total = total + newProduct.price;
        
    // }
    const total = cart.reduce((total, prd) => total+ prd.price, 0)

    let shipping = 0;
    if(total>35) shipping = 0;
    else if(total>15) shipping = 4.99;
    else if(total>0) shipping = 12.99;

    const tax = total / 10;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div>
            <h1>Order Summary: </h1>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total price: {formatNumber(total + shipping +tax)}</p>
        </div>
    );
};

export default Cart;