import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let singerName = [];
    let total = 0;
    for (const singer of cart) {
        total = total + singer.price;
        singerName = singerName + singer.name;

    }


    return (
        <div className='singel-cart'>
            <h4>Total singer : {cart.length}</h4><br />
            <h4>Name : {singerName}</h4>
            <h4>Total Price: {total} </h4>
            <br />

jjj
        </div>
    );
};

export default Cart;
