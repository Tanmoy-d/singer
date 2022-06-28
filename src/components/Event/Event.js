import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singers from '../Singers/Singers';
import './Event.css'

const Event = () => {
    const [singers, setSingers] = useState([]);
    const [cart, setCart] = useState([]);
    const [remove, setRemove] = useState(singers);
    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(datta => setSingers(datta))
    }, []);
    const handelAddToCart = singer => {
        const newSinger = [...cart, singer]
        setCart(newSinger)
    }
    const handelRemove = key => {
        const newRemove = remove.filter(singers => singers.key !== key);
        setRemove(newRemove);
    }

    return (
        <div>
            <div className='event-container'>
                <div className='singer-container'>
                    {
                        singers.map(singer => <Singers
                            key={singer.id}
                            singer={singer}
                            handelAddToCart={handelAddToCart}

                        >
                        </Singers>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart} handelRemove={handelRemove}> </Cart>
                </div>
            </div>

        </div >
    );
};

export default Event;