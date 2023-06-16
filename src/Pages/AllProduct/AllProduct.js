import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from './ProductCard';
import Navbar from '../Shared/Navbar';
import top_BG from '../../utilities/images/products_BG.jpg';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';



const AllProduct = () => {
        const { isLoading, error, data } = useQuery('products', () =>
          fetch('https://mountain-usbl.onrender.com/products').then(res =>
            res.json()
          )
        )
      
        if (isLoading) return <Loading></Loading>
      
        if (error) return 'An error has occurred: ' + error.message


        let categories = [];
        data.map(product=>categories.indexOf(product.Category) === -1 && categories.push(product.Category));
    return (
      <div>
        <Navbar></Navbar>
        <div className="topImg h-[30vh] md:h-[50vh] flex flex-col justify-center"
            style={{background:`url(${top_BG})`, position:'center bottom', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
        >
          <p className='text-base-100 text-3xl lg:text-5xl font-bold'>PRODUCT LINE</p>
        </div>
        <div className="drawer drawer-mobile h-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center p-10">
              <label htmlFor="my-drawer-2" className="btn btn-primary rounded-sm drawer-button mr-auto lg:mr-0 lg:hidden">Filter <FontAwesomeIcon icon={faBarsStaggered}/></label>
              <p className='mr-auto text-2xl font-bold text-secondary my-10 lg:my-0'>{data.length} PRODUCTS</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                  {
                    data?.map(product => <ProductCard key={product._id} details={product}></ProductCard>)
                  }
              </div>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <div className="p-10 w-64 bg-base-100 text-base-content">
              <p className='text-left font-bold text-secondary text-xl border-b border-secondary pb-5'>FILTERS</p>
              <div className="form-control">
                  <div className='flex justify-between items-center py-5 font-semibold text-secondary text-base'>
                    <p>CATEGORY</p>
                    <div className='w-6 h-[2px] bg-primary'></div>
                  </div>
                  {
                    categories.map(category=><label className="label justify-start cursor-pointer"
                                              key={category}>
                                                <input type="checkbox"  className="checkbox h-3 w-3 rounded-none mr-3 border-secondary" />
                                                <span className="label-text text-base text-secondary">{category}</span> 
                                              </label>
                                  )
                  }
              </div>
            </div>
          
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
};

export default AllProduct;