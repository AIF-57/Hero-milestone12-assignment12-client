import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CartItem = ({itemDetail,setDeleteCartItem}) => {
    const {item} = itemDetail.orderDetails;
    const {orderDetails} = itemDetail;

    const [itemUnit,setItemUnit] = useState(orderDetails.unit)
    const increaseItemUnit = () =>{
        const increaseUnit = itemUnit + 1;
        setItemUnit(increaseUnit);
    };
    const decreaseItemUnit = () =>{
        if(itemUnit > 1){
            const decreaseUnit = itemUnit - 1;
            setItemUnit(decreaseUnit);
        }
    };


    return (
        <div className='flex flex-col items-center h-24 justify-center py-0'>
            <div className='w-[70%] h-full grid grid-cols-9 items-center border-b'>
                <div className="itemImg w-full h-full">
                    <img src={item.Image} alt="" className='h-[80px]'/>
                </div>
                <p className='col-span-2'>{item.Model}</p>
                <p>{item.MSRP}</p>
                <div className="quantity col-span-2 flex justify-center">
                    <div className='w-[60%] grid grid-cols-4'>
                        <button onClick={decreaseItemUnit} className='btn btn-sm btn-active btn-ghost rounded-r-none rounded-md'><FontAwesomeIcon icon={faMinus}/></button>
                        <input type="text" value={itemUnit} name='itemUnit' className="input input-bordered w-full h-8 max-w-xs col-span-2 rounded-none text-center" />
                        <button onClick={increaseItemUnit} className='btn btn-sm btn-active btn-ghost rounded-l-none rounded-md'><FontAwesomeIcon icon={faPlus}/></button>
                    </div>
                </div>
                <p>$ total</p>
                <button className="btn btn-outline btn-error w-1/2 mx-auto">{orderDetails.paymentStatus}</button>
                <label htmlFor="cart-modal" onClick={()=>setDeleteCartItem(itemDetail._id)} className="btn btn-sm btn-circle mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </label>
            </div>
        </div>
    );
};

export default CartItem;