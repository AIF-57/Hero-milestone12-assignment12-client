import React from 'react';
import BusinessSummaryCard from './BusinessSummaryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
    return (
        <div className='max-w-[1280px] h-[180px] mx-auto bg-base-100 shadow-xl flex relative z-10 mt-[-85px]'>
            <BusinessSummaryCard number='72' content='Countries'><FontAwesomeIcon icon={faGlobe }/></BusinessSummaryCard>
            <BusinessSummaryCard number='273+' content='Happy Clients'><FontAwesomeIcon icon={faUsers}/></BusinessSummaryCard>
            <BusinessSummaryCard number='432+' content='Feedbacks' bgClass='bg-primary text-base-100'><FontAwesomeIcon icon={faThumbsUp}/></BusinessSummaryCard>
        </div>
    );
};

export default BusinessSummary;