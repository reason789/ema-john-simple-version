import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity} = props.product;
    const reviewItemStyle = {
        borderBottom:'10px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft:'200px'
    }
    return (
        <div style = {reviewItemStyle} className="review-item">
            <h5 className="product-name">{name}</h5>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItems;