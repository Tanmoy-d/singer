


import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, key } = props;

    /// here cart an array of object 

    // let singerName = [];

    let total = 0;
    for (const singer of cart) {
        total = total + singer.price;

        // this line singerName variable replace string all name because u reassain value 
        // singerName = singerName + singer.name;

    }

    function renderSingleCartItem(cart) {
        return cart.map((eachCart, index) => (
            <div className='singel-cart' key={index}>
                <div className='singel-item'>
                    <div>
                        <h4>Name : {eachCart.name}</h4>
                        <h4>Price: {eachCart.price} </h4>
                    </div>
                    <img src={eachCart.img} />

                </div>
                <button className='remove-btn ' onClick={() => props.handelRemove(key)}> ❌</button>
                <br />
            </div>
        ))
    }

    return (
        <div>
            <h2>Total singer : {cart.length}</h2>
            <h2>Total Price: {total} </h2>
            {renderSingleCartItem(cart)}
        </div>
    );
};

export default Cart;