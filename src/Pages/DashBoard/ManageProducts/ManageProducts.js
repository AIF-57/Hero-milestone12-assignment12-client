import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductHorizontal from './ProductHorizontal';
import DeleteProductModal from './DeleteProductModal';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const ManageProducts = () => {
    const [deleteProduct,setDeleteProduct] = useState(null);
    const { isLoading, error, data, refetch} = useQuery('products', () =>
    fetch('http://localhost:5000/products').then(res =>
        res.json()
        )
    )

    if (isLoading) return <Loading/>

    if (error) return 'An error has occurred: ' + error.message

    if(data){
    }

    const handleDeleteProduct = confirmation =>{

        if(confirmation === 'delete'){
            const url = `http://localhost:5000/product/${deleteProduct}`;
            fetch(url,{
              method:'DELETE'
            })
            .then(res=>res.json())
            .then(feedback=>{
              if(feedback.deletedCount > 0){
                toast.error("The product has been deleted");
                refetch();
              };
            });
          };
    };
    return (
        <div className='bg-base-100 my-5 text-left p-5 rounded-sm'>
            <p className='text-neutral font-semibold'>Total Product : <span className='font-bold'>{data.length}</span></p>
            {
                data?.map(product => <ProductHorizontal 
                                        key={data._id}
                                        details={product}
                                        setDeleteProduct={setDeleteProduct}></ProductHorizontal>)
            }
            {deleteProduct && <DeleteProductModal handleDeleteProduct={handleDeleteProduct}/>}
        </div>
    );
};

export default ManageProducts;