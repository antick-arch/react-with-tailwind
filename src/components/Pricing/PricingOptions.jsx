import React, { use } from 'react';
import FeaturePricing from './FeaturePricing';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    const priceInfo = (pricingData.gym_pricing);

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-self-center mb-10">
            {
                priceInfo.map(price => (
                    <div key={price.id} className='border p-5 space-y-5 flex flex-col' >
                        <h2 className='text-2xl text-center font-bold'>{price.plan}</h2>
                        <div className='flex justify-between'>
                            <p className='text-xl text-black/50 font-semibold'>{price.price}</p>
                            <p className='text-xl text-black/50 font-semibold'>{price.billing_cycle}</p>
                        </div>
                        <ul className='flex-1'>
                            {
                                price.features.map((feature, index)=> <FeaturePricing key={index} feature={feature} ></FeaturePricing>)
                            }
                        </ul>
                        <button className="btn btn-primary btn-wide">Subscribe</button>
                    </div>
                ))
            }
        </div>
        </>
    );
};

export default PricingOptions;