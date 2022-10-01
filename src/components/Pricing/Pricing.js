import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'free', price: 0, features: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of the town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;