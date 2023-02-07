import React from 'react';

const BusinessSummaryCard = ({bgClass}) => {
    return (
        <div className={`p-5 ${bgClass}`}>
            <div className="flex h-full items-center ">
                <h2 className="card-title">Card title!</h2>
                <div className="cardContent">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummaryCard;