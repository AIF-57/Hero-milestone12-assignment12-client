import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import notFound from '../../utilities/images/404.jpg'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-between'>
            <Navbar></Navbar>
            <div className="notFound relative h-screen border-2 flex flex-col">
                <div className="img">
                    <img src={notFound} alt="" />
                    <p className='absolute left-[35%] top-[18%] text-5xl font-bold text-base-100'>404 - PAGE NOT FOUND</p>
                </div>
                    <div className="alert shadow-lg w-2/4 m-auto text-secondary text-4xl font-bold">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className=''>That page doesn't exist.</span>
                        </div>
                    </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;