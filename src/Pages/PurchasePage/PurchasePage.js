import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const PurchasePage = () => {
        const {id} = useParams();
        const [user] = useAuthState(auth);

        const customerName = user?.email;
    
        const navigate = useNavigate()
    
        const url = `http://localhost:5000/product/${id}`
        const { isLoading, error, data:product, refetch } = useQuery('product', () =>
            fetch(url).then(res =>
            res.json()
            )
        );

        const minimumOrderNum = parseFloat(product?.Minimum_order_unit);
        const [orderUnit,setOrderUnit] = useState(minimumOrderNum);
    
        if (isLoading) return <Loading></Loading>
          
        if (error) return 'An error has occurred: ' + error.message
    


        const availability = parseFloat(product.AVAILABILITY - minimumOrderNum);


        const remaining = product.AVAILABILITY - orderUnit;
        let remainingQuantity = remaining.toString();
        
        
        // handleOrderUnit
        const handleOrderUnit = (action) =>{
            if(action === "addUnit"){
                if(product.AVAILABILITY > orderUnit){
                    const increaseUnit = orderUnit + 12;
                    setOrderUnit(increaseUnit);

                }else{
                    return orderUnit;
                };
            }else if(action === "reduceUnit"){
                if(orderUnit > minimumOrderNum){
                    const decreaseUnit = orderUnit - 12;
                    setOrderUnit(decreaseUnit);
                }else{
                    return orderUnit;
                };
            };
        };
    
        const addToCart = () =>{
            let today = new Date().toLocaleDateString()


            if(customerName){
                const orderDetails = {
                    date : today,
                    item : product,
                    customerInfo : customerName,
                    quantity: orderUnit,
                    paymentStatus: 'unpaid'
                }
                const url = `http://localhost:5000/order/${id}`
                axios.post(url, {
                    orderDetails
                  })
                  .then(function (response) {
                    if(response.data.success){
                        toast("Product added cart successfully !");

                        const url = `http://localhost:5000/product/${id}`
                        axios.put(url,{remainingQuantity})
                          .then(function (response) {
                            console.log(response);
                  
                            if(response.data.acknowledged){
                              refetch();
                            }
                  
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                  

                        navigate('/all_products')
                    }else{
                        toast.error("The product is already added");
                    };
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }else{
                navigate('/login')
            }
            
        }
        return (
            <div>
                <Navbar></Navbar>

                <div className='flex flex-col min-h-[80vh] justify-center py-32 md:py-0 max-w-[1000px] mx-auto px-5 xl:px-0'>
                        <div className="grid col-span-1 md:grid-cols-3 min-h-[40vh] border">
                            <div className='w-full md:flex md:flex-col justify-center items-center'>
                                <img src={product.Image} alt={id} className='max-w-[300px] md:w-[350px]'/>
                            </div>
                            <div className='md:col-span-2 text-left flex flex-col p-5 md:p-10'>
                                <p className='text-2xl font-semibold text-secondary'>{product.Model}</p>
                                <p className='text-neutral font-semibold'>Model id: {product.MODEL_ID}</p>
                                <div className="availableQuantity w-1/2 my-5">
                                    <p className='text-accent font-semibold'>Available unit: {availability}</p>
                                    <p className='text-accent font-semibold'>Minimum order unit: {minimumOrderNum}</p>

                                </div>
                                <p className='text-4xl text-primary'>{product.MSRP}</p>

                                <div className="quantity flex gap-10 my-5">
                                    <p className='text-neutral font-semibold'>Quantity</p>
                                    <div className="quantity flex">
                                        <button onClick={()=>{handleOrderUnit('reduceUnit')}} className='btn btn-sm btn-active btn-ghost rounded-sm'><FontAwesomeIcon icon={faMinus}/></button>
                                        <input type='text' readOnly value={orderUnit} name='quantity' className='border w-20 text-center font-semibold'/>
                                        <button onClick={()=>{handleOrderUnit('addUnit')}} className='btn btn-sm btn-active btn-ghost rounded-sm'><FontAwesomeIcon icon={faPlus}/></button>
                                    </div>
                                </div>
    
                                <button onClick={addToCart} className='btn mt-auto text-base-100'>Confirm Order</button>
                            </div>
                        </div>
                </div>

                <Footer></Footer>
            </div>
        );
    };

export default PurchasePage;