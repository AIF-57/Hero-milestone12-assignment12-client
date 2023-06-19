import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({details}) => {
    return (
        <div className='border rounded-sm md:border-none md:rounded-none'>
            <Link to={`/product/${details._id}`}>
                <div className=" bg-base-100">
                    <div className='picture min-h-[300px] md:h-[400px] w-full flex flex-col justify-center items-center'>
                        <img src={details.Image} alt="Product" className='w-[60%] md:w-[80%]'/>
                    </div>
                    <div className="text-center">
                    <h2 className="text-secondary font-semibold text-lg">{details.Model}</h2>
                    <p className='text-sm my-2 text-accent'>{details.MODEL_ID}</p>
                    <p className='text-lg text-accent font-semibold'>{details.MSRP}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;