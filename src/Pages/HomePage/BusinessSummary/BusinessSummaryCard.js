import React from 'react';

const BusinessSummaryCard = ({children,number,content, bgClass}) => {
    return (
        <div className={`p-5 ${bgClass} w-full`}>
            <div className="flex justify-around h-full items-center px-20">
                <h2 className="card-title text-5xl">{children}</h2>
                <div className="cardContent">
                    <p className='text-3xl font-bold'>{number}</p>
                    <p className='text-xl'>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummaryCard;