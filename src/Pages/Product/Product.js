import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSquare } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';




const Product = () => {
    const {id} = useParams();
    const [user] = useAuthState(auth);

    const url = `https://mountain-usbl.onrender.com/product/${id}`
    const { isLoading, error, data } = useQuery('product', () =>
        fetch(url).then(res =>
        res.json()
        )
    )

    if (isLoading) return <Loading></Loading>
      
    if (error) return 'An error has occurred: ' + error.message

    if(data){
    }


    
    const adminEmail = "ariyanislam666@gmail.com";
    const userEmail = user?.email;

    let admin;
    if(userEmail === adminEmail){
      admin = true;
    }else{
      admin = false;
    };

    const features = data.FEATURES;
    const specifications = data.SPECIFICATIONS;






    return (
        <div>
            <Navbar></Navbar>
            <div className="imgGallery min-h-[30vh] md:h-[75vh] flex justify-center items-center ">
                <div className="featureImage w-[40%] md:h-[60%]">
                    <img src={data.Image} alt="" className='max-h-[400px] mx-auto'/>
                </div>
            </div>

            <div className="navbar text-neutral-content p-0 bg-secondary grid grid-cols-1 md:flex">
                <p className=" normal-case text-2xl font-bold text-base-100 px-5 py-2 md:py-0 mx-auto md:mx-0 md:w-1/2">{data.Model}</p>

                {
                    admin ?
                    <ul className="w-full md:w-1/2 menu menu-horizontal px-0 text-lg text-stone-400 justify-end">
                        <li className='w-1/3 md:w-36 h-16 flex items-center justify-center md:hidden border-t md:border-none'><a href='#features' className='inline-block h-full'>Features</a></li>
                        <li className='w-1/3 md:w-36 h-16 flex items-center justify-center border-t md:border-none'><a href='#specifications' className='inline-block h-full'>Specifications</a></li>
                    </ul>

                    :
                    <ul className="w-full md:w-1/2 menu menu-horizontal px-0 text-lg text-stone-400 justify-end">
                        <li className='w-1/3 md:w-36 h-16 flex items-center justify-center md:hidden border-t md:border-none'><a href='#features' className='inline-block h-full'>Features</a></li>
                        <li className='w-1/3 md:w-36 h-16 flex items-center justify-center border-t md:border-none'><a href='#specifications' className='inline-block h-full'>Specifications</a></li>
                        <li className='w-1/3 md:w-36'><button className={`bg-primary h-16 w-full md:w-36 text-base-100 flex items-center ${(data.Status === 'Stock out') && 'btn-disabled bg-gray-300 text-gray-400'}`}><Link to={`/purchase/${id}`} className='inline-block w-full h-full text-center'><FontAwesomeIcon icon={faCartPlus}/></Link></button></li>
                    </ul>

                }
            </div>

            <div className="productInfo max-w-[1280px] mx-auto py-10 md:py-20 px-5">
                <div className="overView flex flex-col md:flex-row items-start justify-between py-10">
                    <div className="description md:w-[55%] text-left">
                        <p className='tracking-widest text-accent font-bold mb-5'>DESCRIPTION</p>
                        <p className='leading-7 text-secondary'>{data.DESCRIPTION}</p>
                        <section className='my-10 grid grid-cols-3'>
                            <div className="msrp">
                                <p className='font-bold text-accent text-sm'>MSRP</p>
                                <p className='text-2xl'>{data.MSRP}</p>
                            </div>
                            <div className="status">
                                <p className='font-bold text-accent text-sm'>AVAILABILITY</p>
                                <p className='text-2xl'>{data.AVAILABILITY}</p>
                            </div>
                        </section>
                    </div>
                    <div id='features' className="features md:w-[30%] text-left">
                        <p className='text-accent font-bold tracking-widest mb-5'>FEATURES</p>
                        {
                            features?.map(feature=><div className='my-2 flex text-secondary'
                                                    key={feature}>
                                                    <span className='mr-2 mt-[-2px]'><FontAwesomeIcon icon={faSquare} className='text-[5px] text-primary'></FontAwesomeIcon></span>
                                                    <p className='leading-7'>{feature}</p>
                                                </div>)
                        }
                    </div>
                </div>
            
                <div id='specifications' className="specifications py-10 border-y border-secondary">
                    <p className='text-left text-4xl font-bold mb-10 to-secondary'>SPECIFICATIONS</p>
                    {
                        Object?.entries(specifications).map(entry=><div className='flex text-left border-b py-5'
                                                                    key={entry}>
                                                                    <p className='w-[40%] text-accent font-semibold tracking-widest'>{entry[0]}</p>
                                                                    <p className='w-[60%] text-accent'>{entry[1]}</p>
                                                                </div>)
                    }
                </div>
            
            </div>
        
            <Footer></Footer>
        </div>
    );
};

export default Product;