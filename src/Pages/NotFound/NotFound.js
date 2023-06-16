import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import notFound from '../../utilities/images/404.jpg'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-between'>
            <Navbar></Navbar>
            <div className="topImg h-[80vh] lg:h-[100vh] flex flex-col justify-center"
            style={{background:`url(${notFound})`, position:'center bottom', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
        >
                    <div className='mt-20'>
                        <p className='text-3xl lg:text-5xl font-bold text-base-100'>404 - PAGE NOT FOUND</p>
                    </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;