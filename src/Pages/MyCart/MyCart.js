import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import { useState } from 'react';
import CartModal from './CartModal';

const MyCart = () => {
    const [deleteCartItem,setDeleteCartItem] = useState('');
    // load Cart data
    const { isLoading, error, data } = useQuery('cartItems', () =>
      fetch('http://localhost:5000/user-orders').then(res =>
        res.json()
      )
    );

    if (isLoading) return <Loading/>

    if (error) return 'An error has occurred: ' + error.message

    if(data){
    }


    const handleDeleteItemFromCart = confirmation =>{
      if(confirmation === 'remove'){
        const url = `http://localhost:5000/user-order/${deleteCartItem}`;
        fetch(url,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(feedback=>{
          if(feedback.deletedCount > 0){
            toast.error("The product has been removed");
          };
        });
      };
    };

    return (
        <div>
            <Navbar/>
            <div className="pageHeading py-10">
              {
                (data.length) ? 
                <p className='text-2xl font-bold'>My Cart ({data?.length} items)</p>
                :
                <p className='text-2xl font-bold'>Your Shopping Cart is empty!</p>
              }
            </div>
            <div className="cartItems">
              {
                data.map(item=><CartItem 
                    key={item._id}
                    itemDetail={item}
                    setDeleteCartItem={setDeleteCartItem}
                  ></CartItem>)
              }
            </div>
            {deleteCartItem && <CartModal handleDeleteItemFromCart={handleDeleteItemFromCart}></CartModal>}

         </div>
    );
};

export default MyCart;