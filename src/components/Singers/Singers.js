import React from 'react';
import './Singer.css'

const Singers = (props) => {
    const { name, img, age, occupation, Awards, year_active, price } = props.singer;
    // console.log(props.singer);
    return (
        <>
            <div className='singer'>
                <div className=''>
                    <img src={img} alt="img" />
                    <h5>Name : {name}</h5>
                    <p>Age : {age}</p>
                    <p>Occupation :{occupation}</p>
                    <p>Awards : {Awards}</p>
                    <p>Year Active : {year_active}</p>
                    <h5>Price : {price}</h5>
                    <button className='btn' onClick={() => props.handelAddToCart(props.singer)}>Order Now</button>
                </div>

            </div>
        </>

    );
};

export default Singers;