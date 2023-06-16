import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const DashBoard = () => {
    const [user] = useAuthState(auth);


    const adminEmail = "ariyanislam666@gmail.com";
    const userEmail = user?.email;

    let admin;
    if(userEmail === adminEmail){
      admin = true;
    }else{
      admin = false;
    };
    return (
        <div>

            <Navbar></Navbar>

                <div className="drawer drawer-mobile h-auto">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content bg-gray-100 py-20 px-8 max-w-[1280px] min-h-[80vh]">
                        <div className='flex justify-start'>
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden rounded-sm">dashboard</label>
                        </div>
                        <Outlet></Outlet>
                    
                    </div> 
                    <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <div className="py-10 w-64 bg-base-100 text-base-content">
                            <div className='bg-gray-50 h-10 flex items-center px-10'>
                                <p className='font-bold text-accent text-left text-sm'>DASHBOARD</p>
                            </div>
                            <ul className="menu bg-base-100 font-semibold">
                                {!admin && <li className='border-b h-16'><Link to={'user_orders'} className='h-full px-10 text-secondary'>Orders</Link></li>}
                                {!admin && <li className='border-b h-16'><Link to={'my-cart'} className='h-full px-10 text-secondary'>Cart</Link></li>}
                                {admin && <li className='border-b h-16'><Link to={'admin_summary'} className='h-full px-10 text-secondary'>Summary</Link></li>}
                                {admin && <li className='border-b h-16'><Link to={'manage_products'} className='h-full px-10 text-secondary'>Manage Product</Link></li>}
                                {admin && <li className='border-b h-16'><Link to={'new_product'} className='h-full px-10 text-secondary'>New Product</Link></li>}
                                <li className='border-b h-16'><Link to={'my_account'} className='h-full px-10 text-secondary'>Account</Link></li>

                            </ul>
                    </div>
                    
                    </div>
                </div>


            <Footer></Footer>
        </div>
    );
};

export default DashBoard;