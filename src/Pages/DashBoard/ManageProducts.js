import React from 'react';
import { useQuery } from 'react-query';
import ProductHorizontal from '../Product/ProductHorizontal';

const ManageProducts = () => {
    const { isLoading, error, data } = useQuery('products', () =>
    fetch('http://localhost:5000/products').then(res =>
        res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    if(data){
        console.log(data)
    }
    return (
        <div className='bg-base-100 my-5 text-left p-5 rounded-sm'>
            <p className='text-neutral font-semibold'>Total Product : <span className='font-bold'>{data.length}</span></p>
            {
                data?.map(product => <ProductHorizontal details={product}></ProductHorizontal>)
            }
        </div>
    );
};

export default ManageProducts;