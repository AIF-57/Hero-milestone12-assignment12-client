import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductHorizontal = ({details, handleProductStatus, setDeleteProduct}) => {
    // console.log(details);

    let statusAvailable;
    if (details.Status === 'Available') {
        statusAvailable = true;
    }else{
        statusAvailable = false
    };

    return (
        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2 lg:gap-5 border rounded-sm my-5 text-center p-2 lg:h-40'>
            <div className='md:row-span-2 lg:row-auto flex items-center justify-center'>
                <img src={details.Image} alt="" width="150"/>    
            </div>

            <div className='col-span-2 flex flex-col'>
                <span className='text-sm font-semibold text-accent h-[40%] pt-2'>Model_ID</span>
                <p className='font-semibold text-neutral'>{details.MODEL_ID}</p>
            </div>
            <div className='flex flex-col'>
                <span className='text-sm font-semibold text-accent h-[40%] pt-2'>Category</span>
                <p className='font-semibold text-neutral'>{details.Category}</p>
            </div>
            <div className='flex flex-col'>
                <span className='text-sm font-semibold text-accent h-[40%] pt-2'>MSRP</span>
                <p className='font-semibold text-neutral'>{details.MSRP}</p>
            </div>
            <div className='md:col-span-2 lg:col-auto flex flex-col'>
                <span className='text-sm font-semibold text-accent h-[40%] pt-2'>Quantity</span>
                <p className='font-semibold text-neutral'>{details.AVAILABILITY}</p>
            </div>
            <div className='flex flex-col'>
                <span className='text-sm font-semibold text-accent h-[40%] pt-2'>Status</span>
                    {statusAvailable ?
                        <button onClick={()=>{handleProductStatus(details._id)}} className='btn btn-outline btn-success relative'>
                            <p>{details.Status}</p>
                            <div className='badge badge-success border-none badge-xs absolute top-1 right-1'></div>
                            </button>    
                            :
                            <p className='btn btn-error relative btn-disabled'>
                                <p>{details.Status}</p>
                                <div className='badge badge-error border-none badge-xs absolute top-1 right-1'></div>
                            </p>    

                    }
            </div>
            <div className='col-span-2 md:col-auto flex lg:flex-col justify-evenly items-center'>
                <Link to={`/dashboard/edit_product/${details.MODEL_ID}`}>                
                    <span className='border h-12 w-12 rounded-full flex items-center justify-center cursor-pointer tooltip' data-tip="edit product"><FontAwesomeIcon className='text-2xl text-accent' icon={faEdit}/></span>
                </Link>
                <label htmlFor="deleteProduct-modal" onClick={()=>setDeleteProduct(details._id)}>
                    <span className='border h-12 w-12 rounded-full flex items-center justify-center cursor-pointer tooltip' data-tip="delete product"><FontAwesomeIcon className='text-2xl text-accent' icon={faTrash}/></span>
                </label>

            </div>

        </div>
    );
};

export default ProductHorizontal;