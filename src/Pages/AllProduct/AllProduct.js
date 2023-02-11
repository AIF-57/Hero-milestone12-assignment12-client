import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from './ProductCard';
import Navbar from '../Shared/Navbar';
import top_BG from '../../utilities/images/products_BG.jpg';


const AllProduct = () => {
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
      <div>
        <Navbar></Navbar>
        <div className="topImg h-[50vh] flex flex-col justify-center"
            style={{background:`url(${top_BG})`, position:'center bottom', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
        >
          <p className='text-base-100 text-5xl font-bold'>PRODUCT COLLECTION</p>
        </div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center py-10">
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
              <p className='mr-auto text-2xl font-bold text-secondary'>{data.length} PRODUCTS</p>
              <div className='grid grid-cols-4 gap-y-10'>
                  {
                    data?.map(product => <ProductCard key={product._id} details={product}></ProductCard>)
                  }
              </div>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          
          </div>
        </div>
      </div>
    );
};

export default AllProduct;