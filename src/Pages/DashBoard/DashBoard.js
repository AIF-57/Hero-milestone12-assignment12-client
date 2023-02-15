import React from 'react';
import Navbar from '../Shared/Navbar';

const DashBoard = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-100 py-20 px-8">
                    <p className='text-secondary text-2xl font-bold text-left'>MY ACCOUNT</p>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                </div> 
                <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <div>
                        <div className='bg-gray-50 h-10 flex items-center px-10'>
                            <p className='font-bold text-accent text-left text-sm'>DASHBOARD</p>
                        </div>
                        <ul className="menu w-80 bg-base-100 text-base-content text-left">




                        <li className='border-b py-5 px-10'>Sidebar Item 1</li>
                        <li className='border-b py-5 px-10'>Sidebar Item 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;