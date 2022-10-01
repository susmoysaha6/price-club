import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3>
                    <span className='text-5xl font-bold text-white'>{price}</span>
                    <span className='text-2xl text-gray-500'>/mon</span>
                </h3>
                <p className='text-3xl my-4'>{name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature feature={feature} key={idx} ></Feature>)
            }
            <button className='bg-green-500 my-2 w-full rounded-md py-2 text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;