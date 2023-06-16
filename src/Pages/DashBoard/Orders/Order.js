import React from 'react';

const Order = ({detail}) => {
    const {orderDetails} = detail
    const {item} = detail.orderDetails;



    const itemMSRP = item.MSRP;
    const itemMSRPArr = itemMSRP.split("$");
    const itemMSRPToNumber = parseFloat(itemMSRPArr[1]);
    const quantity = orderDetails.quantity;

    const total = quantity * itemMSRPToNumber;
    return (

            <div className='bg-base-100 border-t-2 border-red-300 shadow-xl rounded-sm text-left my-10 p-10'>

                    <p className='text-secondary text-lg font-semibold'>{item.MODEL_ID}<span className='text-base font-normal ml-5 text-neutral'>(${total} for {quantity})</span></p>
                    <p className='my-5'>{orderDetails.date}</p>
                    <p className="border-2 border-warning rounded-sm text-secondary font-semibold capitalize h-10 max-w-[120px] px-2 flex items-center justify-center">completed</p>


            </div>
    );
};

export default Order;