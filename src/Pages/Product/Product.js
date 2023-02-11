import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Product = () => {
    const {id} = useParams();

    const url = `http://localhost:5000/product/${id}`
    const { isLoading, error, data } = useQuery('product', () =>
        fetch(url).then(res =>
        res.json()
        )
    )

    if (isLoading) return 'Loading...'
      
    if (error) return 'An error has occurred: ' + error.message

    if(data){
      console.log(data)
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="imgGallery h-[75vh] flex justify-center items-center ">
                <div className="featureImage w-[40%] h-[60%]">
                    <img src={data.Image} alt="" className='max-h-[400px] mx-auto'/>
                </div>
            </div>

            <div className="navbar bg-neutral text-neutral-content p-0">
                <p className="normal-case text-2xl font-bold text-base-100 px-5">{data.Model}</p>
                <ul className="menu menu-horizontal ml-auto px-0 text-xl text-gray-300">
                    <li className='w-36'><a>Item 1</a></li>
                    <Link className='bg-primary h-16 w-36 flex items-center justify-center'>
                        <p className='text-base-100'>Item 3</p>
                    </Link>
                </ul>
            </div>

        </div>
    );
};

export default Product;