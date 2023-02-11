import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({details}) => {
    console.log(details)
    return (
        <div>
            <Link to={`/product/${details.MODEL_ID}`}>
                <div className=" bg-base-100 px-5">
                    <div className='picture h-[400px] w-full flex flex-col justify-center items-center'>
                        <img src={details.Image} alt="Product" className='w-[90%]'/>
                    </div>
                    <div className="text-center">
                    <h2 className="text-xl to-secondary font-semibold">{details.Model}</h2>
                    <p className='text-sm my-2 text-accent'>{details.MODEL_ID}</p>
                    <p className='text-lg text-accent font-semibold'>{details.MSRP}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;