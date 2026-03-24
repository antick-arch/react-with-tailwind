import React from 'react';
import { CircleCheckBig } from 'lucide-react';
const FeaturePricing = ({feature}) => {
    return (
        <li className='flex items-center gap-2 mb-2'><CircleCheckBig color="#51f524" />{feature}</li>
    );
};

export default FeaturePricing;