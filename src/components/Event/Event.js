import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';
import './Event.css'

const Event = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(datta => setSingers(datta))
    }, []);
    const handelAddToCart = singer => {
        const newSinger = [...cart, singer]
        setCart(newSinger)
    }
    return (
        <div>
            <div className='event-container'>
                <div className='singer-container'>
                    {
                        singers.map(singer => <Singers
                            singer={singer}
                            handelAddToCart={handelAddToCart}

                        >
                        </Singers>
                        )
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}> </Cart><br />
                </div>
            </div>

        </div >
    );
};

export default Event;