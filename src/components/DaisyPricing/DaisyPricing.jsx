import React, { use } from 'react';
import DaisyFeatures from './DaisyFeatures';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';

const DaisyPricing = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise).gym_pricing;
    const data = [
  { month: "Jan", income: 500, expense: 300 },
  { month: "Feb", income: 600, expense: 350 },
  { month: "Mar", income: 700, expense: 400 },
  { month: "Apr", income: 650, expense: 420 },
  { month: "May", income: 800, expense: 500 }
];
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 place-self-center mb-10'>
            {
                pricingData.map(pricingInfo => (
                    < div key={pricingInfo.id} className="card w-96 bg-base-100 shadow-sm flex flex-col" >
                        <div className="card-body">
                            {
                                pricingInfo.most_popular && <span className="badge badge-xs badge-warning">Most Popular</span>
                            }
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
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />
            <YAxis />

            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="income" stroke="#8884d8" />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
        </>
    );
};

export default DaisyPricing;