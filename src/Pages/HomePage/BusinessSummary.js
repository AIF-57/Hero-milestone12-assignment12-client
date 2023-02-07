import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faHeadset, faArrowRotateLeft, faCertificate, faDollarSign, faPercentage } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <div className='max-w-[1280px] mx-auto pb-32'>
            <div className="sectionHeading text-left mb-5">
                <div className="subHeading relative mb-5">
                <p className='font-semibold tracking-widest text-primary'>Clients Aspect</p>
                <div className='absolute w-14 h-[2px] bg-primary top-8'></div>
                </div>
                <p className='text-5xl font-bold text-secondary'>Business Features</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-10'>
                <div className="card card-side items-center mx-auto md:mx-0">
                    <figure><FontAwesomeIcon icon={faTruckFast} className='text-6xl'/></figure>
                    <div className="card-body p-5 text-left">
                        <h2 className="card-title text-primary ">FREE DELIVERY</h2>
                        <p className='text-accent'>Free shipping on all order</p>
                    </div>
                </div>

                <div className="card card-side bg-base-100 items-center mx-auto md:mx-0">
                    <figure><FontAwesomeIcon icon={faHeadset} className='text-6xl'/></figure>
                    <div className="card-body lg:p-5 text-left">
                        <h2 className="card-title text-primary ">ONLINE SUPPORT 24/7</h2>
                        <p className='text-accent'>Support online 24 hours</p>
                    </div>
                </div>


                <div className="card card-side bg-base-100 items-center mx-auto md:mx-0">
                    <figure className='w-20'>
                        <span className='inline-block '><FontAwesomeIcon icon={faArrowRotateLeft} className='text-6xl'/></span>
                        <span  className='absolute inline-block top-[42%]'><FontAwesomeIcon icon={faDollarSign} className='text-2xl'/></span>
                    </figure>
                    <div className="card-body lg:p-5 text-left">
                        <h2 className="card-title text-primary ">MONEY RETURN</h2>
                        <p className='text-accent'>Back guarantee under 7 days</p>
                    </div>
                </div>


                <div className="card card-side bg-base-100 items-center mx-auto md:mx-0">
                    <figure>
                        <FontAwesomeIcon icon={faCertificate} className='text-6xl'/>
                        <FontAwesomeIcon icon={faPercentage} className='text-2xl text-base-100 absolute'/>
                    </figure>
                    <div className="card-body lg:p-5 text-left">
                        <h2 className="card-title text-primary ">MEMBER DISCOUNT</h2>
                        <p className='text-accent'>on every order over $30.00</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;