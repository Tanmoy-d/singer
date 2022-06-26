import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;


    /// here cart an array of object 

    // let singerName = [];

    let total = 0;
    for (const singer of cart) {
        total = total + singer.price;

        // this line singerName variable replace string all name because u reassain value 
        // singerName = singerName + singer.name;

    }

    function renderSingleCartItem(cart){
        let cartKeys = Object.keys(cart)
        if(cartKeys && cartKeys.length > 0){
            return cartKeys.map(eachCart=>(
                <div className='singel-cart'>
                    <h4>Name : {cart[eachCart].name}</h4>
                    <h4>Price: {cart[eachCart].price} </h4>
                    <img src={cart[eachCart].img}  />
                    <br />
                </div>
            ))
        }

    }

    return (
        <div>
            <h4>Total singer : {cart.length}</h4>
            <h4>Total Price: {total} </h4>
            <br />
            { renderSingleCartItem(cart) }
        </div>
    );
};

export default Cart;