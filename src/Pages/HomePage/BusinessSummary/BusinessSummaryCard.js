import React from 'react';

const BusinessSummaryCard = ({children,number,content, bgClass}) => {
    return (
        <div className={`p-5 ${bgClass}`}>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-around h-full items-center lg:px-20">
                <h2 className="card-title text-2xl lg:text-5xl">{children}</h2>
                <div className="cardContent">
                    <p className='text-xl lg:text-3xl font-bold'>{number}</p>
                    <p className=' text-lg lg:text-xl'>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummaryCard;