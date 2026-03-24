import React, { use } from 'react';
import DaisyFeatures from './DaisyFeatures';

const DaisyPricing = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise).gym_pricing;
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-self-center mb-10'>
            {
                pricingData.map(pricingInfo => (
                    < div key={pricingInfo.id} className="card w-96 bg-base-100 shadow-sm flex flex-col" >
                        <div className="card-body">
                            <span className="badge badge-xs badge-warning">Most Popular</span>
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">{pricingInfo.plan}</h2>
                                <span className="text-xl">{pricingInfo.price}/{pricingInfo.billing_cycle}</span>
                            </div>
                            <ul className="mt-6 flex-1 flex-col gap-2 text-xs">
                                {
                                    pricingInfo.features.map((feature, index) => <DaisyFeatures key={index} feature={feature}></DaisyFeatures>)
                                }
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default DaisyPricing;