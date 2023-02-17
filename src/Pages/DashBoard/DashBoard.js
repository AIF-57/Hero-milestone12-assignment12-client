import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';


const DashBoard = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="drawer drawer-mobile h-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-100 py-20 px-8 max-w-[1280px]">
                    <p className='text-secondary text-2xl font-bold text-left'>MY ACCOUNT</p>
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
                            <li className='border-b h-16'><Link to={'manage_products'} className='h-full px-10 text-secondary'>Manage Product</Link></li>
                            <li className='border-b h-16'><Link to={'new_product'} className='h-full px-10 text-secondary'>New Product</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashBoard;