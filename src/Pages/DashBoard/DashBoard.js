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
                    <p className='text-secondary text-2xl font-bold text-left'></p>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <div>
                        <div className='bg-gray-50 h-10 flex items-center px-10'>
                            <p className='font-bold text-accent text-left text-sm'>DASHBOARD</p>
                        </div>
                        <ul className="menu w-80 bg-base-100 font-semibold">
                            <li className='border-b h-16'><Link to={'my-cart'} className='h-full px-10 text-secondary'>Cart</Link></li>
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