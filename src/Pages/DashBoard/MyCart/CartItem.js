
const CartItem = ({itemDetail, handlePaymentStatus, setDeleteCartItem}) => {

    const {item} = itemDetail.orderDetails;
    const {orderDetails} = itemDetail;



    const itemMSRP = item.MSRP;
    const itemMSRPArr = itemMSRP.split("$");
    const itemMSRPToNumber = parseFloat(itemMSRPArr[1]);
    const totalPrice = itemMSRPToNumber * orderDetails.quantity;



  


    return (
        <div className='flex flex-col items-center min-h-[100px] justify-center py-2 md:py-0 border-b'>
            <div className='w-full h-full grid grid-cols-4 md:grid-cols-8 items-center'>
                <div className="itemImg row-span-3 md:row-auto md:w-full h-full flex items-center md:flex-none">
                    <img src={item.Image} alt="" className="max-w-[80px] md:max-w-[100px]"/>
                </div>
                <p className='col-span-3 md:col-span-3 text-secondary font-semibold text-lg px-2'>{item.Model}</p>

                <div className="priceCalculation flex justify-evenly col-span-3 md:col-span-2 font-semibold text-neutral py-3 md:py-0">
                    <p>{item.MSRP}</p>
                    <p>{orderDetails.quantity}</p>
                    <p>${totalPrice}</p>
                </div>


                <div className="col-span-3 md:col-span-2 flex md:flex-none">
                    {
                        (orderDetails.paymentStatus === 'paid') ? 
                        <p className="bg-success text-base-100 font-semibold uppercase py-3 w-[83px] mx-auto">{orderDetails.paymentStatus}</p>
                        :
                        <button onClick={()=>{handlePaymentStatus(itemDetail._id)}} className="btn btn-outline btn-error mx-auto rounded-sm">{orderDetails.paymentStatus}</button>
                    }



                    {
                        (orderDetails.paymentStatus === 'paid') ?
                        <button className="btn btn-sm btn-circle mx-auto" disabled="disabled">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        :
                        <label htmlFor="cart-modal" onClick={()=>setDeleteCartItem(itemDetail._id)} className="btn btn-sm btn-circle mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </label>

                    }

                </div>

            </div>


        </div>
    );
};

export default CartItem;