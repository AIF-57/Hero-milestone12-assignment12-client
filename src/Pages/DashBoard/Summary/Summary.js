import React from 'react';
import { useQuery } from 'react-query';

const Summary = () => {
    const { isLoading, error, data:products } = useQuery('products', () =>
    fetch('https://mountain-usbl.onrender.com/products').then(res =>
      res.json()
    )
  )

    // load Cart data
    const { isLoading2, error2, data:cartItems, refetch} = useQuery('cartItems', () =>
    fetch('https://mountain-usbl.onrender.com/user-orders').then(res =>
      res.json()
    )
  );
  

  if (isLoading) return <p>Loading...</p>

  if (error) return 'An error has occurred: ' + error.message



  const orderQuantityArr = cartItems?.filter(item => item?.orderDetails?.quantity);

  let orderQuantity = 0;
  if(orderQuantityArr){
    for (const q of orderQuantityArr) {
      orderQuantity = orderQuantity + q?.orderDetails?.quantity;
    };
  }





    return (
        <div className='bg-base-100 my-5 text-left p-5 rounded-sm'>
          <p className='text-neutral font-semibold mb-10'>Summary</p>

                <p className='text-lg'>Total Products: <span className='text-base text-secondary font-semibold'>{products?.length}</span></p>
                <p className='text-lg my-2'>Total Order: <span className='text-base text-secondary font-semibold'>{cartItems?.length}</span></p>
                <p className='text-lg'>Total Order quantity: <span className='text-base text-secondary font-semibold'>{orderQuantity}</span></p>

        </div>
    );
};

export default Summary;