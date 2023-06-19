import { useQuery } from 'react-query';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import { useState } from 'react';
import CartModal from './CartModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import auth from '../../../firebase.init';
import axios from 'axios';

const MyCart = () => {
    const [user] = useAuthState(auth);
    const userIdentity = user?.email;

    const [deleteCartItem,setDeleteCartItem] = useState('');

    // load Cart data
    const { isLoading, error, data:cartItems, refetch} = useQuery('cartItems', () =>
      fetch('http://localhost:5000/user-orders').then(res =>
        res.json()
      )
    );

    if (isLoading) return <Loading/>

    if (error) return 'An error has occurred: ' + error.message


    const myItems = cartItems.filter(item=> item?.orderDetails?.customerInfo === userIdentity)

    const handleDeleteItemFromCart = confirmation =>{
      if(confirmation === 'remove'){

        const url = `http://localhost:5000/cart_item/${deleteCartItem}`
        axios.get(url)
          .then(function (response) {
            if (response) {
              const productId = response.data.orderDetails.item._id;
              const cartItemOrderedQuantity = response.data.orderDetails.quantity;
  
              
              const url = `http://localhost:5000/product/${productId}`
              axios.get(url)
                .then(function (response) {
                  if(response.data.AVAILABILITY === 'Out of stock'){
                    let productAvailableQuantity = 0;
                    const quantity = cartItemOrderedQuantity + productAvailableQuantity;
                    const remainingQuantity = quantity.toString();

                    const url = `http://localhost:5000/product/${productId}`
                    axios.put(url,{remainingQuantity})
                      .then(function (response) {        
                      })
                      .catch(function (error) {
                        console.log(error);
                      });



                      const url2 = `http://localhost:5000/user-order/${deleteCartItem}`;
                      fetch(url2,{
                        method:'DELETE'
                      })
                      .then(res=>res.json())
                      .then(feedback=>{
                        if(feedback.deletedCount > 0){
                          toast.error("The product has been removed");
                          refetch();
                        };
                      });
                  }else{
                    let productAvailableQuantity = parseFloat(response.data.AVAILABILITY);
                    const quantity = cartItemOrderedQuantity + productAvailableQuantity;
                    const remainingQuantity = quantity.toString();

                    const url = `http://localhost:5000/product/${productId}`
                    axios.put(url,{remainingQuantity})
                      .then(function (response) {        
                      })
                      .catch(function (error) {
                        console.log(error);
                      });



                      const url2 = `http://localhost:5000/user-order/${deleteCartItem}`;
                      fetch(url2,{
                        method:'DELETE'
                      })
                      .then(res=>res.json())
                      .then(feedback=>{
                        if(feedback.deletedCount > 0){
                          toast.error("The product has been removed");
                          refetch();
                        };
                      });
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          })
          .catch(function (error) {
            console.log(error);
          });



      };
    };

    // handlePaymentStatus
    const handlePaymentStatus = id =>{

      const url = `http://localhost:5000/cart_item/${id}`
      axios.put(url)
        .then(function (response) {

          if(response.data.acknowledged){
            toast.success("Payment successful.");
            refetch();
          }

        })
        .catch(function (error) {
          console.log(error);
        });

    }

    return (
        <div>
            <div className="pageHeading py-10">
              {
                (myItems.length) ? 
                <p className='text-2xl font-bold'>My Cart ({myItems?.length} item)</p>
                :
                <p className='text-2xl font-bold'>Your Shopping Cart is empty!</p>
              }
            </div>
            <div className="cartItems pt-10 pb-20 min-h-[80vh]">
              {
                myItems.map(item=><CartItem 
                    key={item._id}
                    itemDetail={item}
                    handlePaymentStatus={handlePaymentStatus}
                    setDeleteCartItem={setDeleteCartItem}
                  ></CartItem>)
              }
            </div>
            {deleteCartItem && <CartModal handleDeleteItemFromCart={handleDeleteItemFromCart}></CartModal>}

         </div>
    );
};

export default MyCart;