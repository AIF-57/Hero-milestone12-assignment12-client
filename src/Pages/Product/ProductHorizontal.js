import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductHorizontal = ({details}) => {
    return (
        <div className='grid grid-cols-8 gap-5 border rounded-sm my-5 text-center p-2 h-40'>
            <div className='flex items-center justify-center'>
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
            <div className='flex flex-col'>
                <span className='text-sm font-semibold text-accent h-[40%] pt-2'>Status</span>
                <p className='font-semibold text-neutral'></p>
            </div>
            <div className='flex flex-col'>
                <span className='text-sm font-semibold text-accent h-[40%] pt-2'>Quantity</span>
                <p className='font-semibold text-neutral'></p>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
                <span className='border h-12 w-12 rounded-full flex items-center justify-center cursor-pointer tooltip' data-tip="edit product"><FontAwesomeIcon className='text-2xl text-accent' icon={faEdit}/></span>
                <span className='border h-12 w-12 rounded-full flex items-center justify-center cursor-pointer tooltip' data-tip="delete product"><FontAwesomeIcon className='text-2xl text-accent' icon={faTrash}/></span>
            </div>

        </div>
    );
};

export default ProductHorizontal;