import React from 'react';
import BusinessSummaryCard from './BusinessSummaryCard';

const BusinessSummary = () => {
    return (
        <div className='max-w-[1280px] h-[180px] mx-auto bg-base-100 shadow-xl flex relative z-10 mt-[-85px]'>
            <BusinessSummaryCard></BusinessSummaryCard>
            <BusinessSummaryCard></BusinessSummaryCard>
            <BusinessSummaryCard bgClass='bg-primary text-base-100'></BusinessSummaryCard>
        </div>
    );
};

export default BusinessSummary;