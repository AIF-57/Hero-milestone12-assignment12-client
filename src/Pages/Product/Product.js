import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';



const Product = () => {
    const {id} = useParams();

    const url = `http://localhost:5000/product/${id}`
    const { isLoading, error, data } = useQuery('product', () =>
        fetch(url).then(res =>
        res.json()
        )
    )

    if (isLoading) return <Loading></Loading>
      
    if (error) return 'An error has occurred: ' + error.message

    if(data){
      console.log(data)
    }

    const features = data.FEATURES;
    const specifications = data.SPECIFICATIONS;
    console.log(specifications);
    console.log(Object.entries(specifications));
    return (
        <div>
            <Navbar></Navbar>
            <div className="imgGallery h-[75vh] flex justify-center items-center ">
                <div className="featureImage w-[40%] h-[60%]">
                    <img src={data.Image} alt="" className='max-h-[400px] mx-auto'/>
                </div>
            </div>

            <div className="navbar text-neutral-content p-0 bg-secondary">
                <p className="normal-case text-2xl font-bold text-base-100 px-5">{data.Model}</p>
                <ul className="menu menu-horizontal ml-auto px-0 text-lg text-stone-400">
                    <li className='w-36 h-16 flex items-center'><a href='#specifications' className='inline-block'>Specifications</a></li>
                    <li  className='bg-primary h-16 w-36 text-base-100 flex items-center'><Link className='inline-block w-full text-center'>Item 3</Link></li>
                </ul>
            </div>

            <div className="productInfo max-w-[1280px] mx-auto py-20">
                <div className="overView flex items-start justify-between py-10">
                    <div className="description w-[55%] text-left">
                        <p className='tracking-widest text-accent font-bold mb-5'>DESCRIPTION</p>
                        <p className='leading-7 text-secondary'>{data.DESCRIPTION}</p>
                        <section className='my-10 grid grid-cols-3'>
                            <div className="msrp">
                                <p className='font-bold text-accent text-sm'>MSRP</p>
                                <p className='text-2xl'>{data.MSRP}</p>
                            </div>
                            <div className="status">
                            <p className='font-bold text-accent text-sm'>STATUS</p>
                            </div>
                            <div className="status">
                            <p className='font-bold text-accent text-sm'>STATUS</p>
                            </div>
                        </section>
                    </div>
                    <div className="features w-[30%] text-left">
                        <p className='text-accent font-bold tracking-widest mb-5'>FEATURES</p>
                        {
                            features.map(feature=><div className='my-2 flex text-secondary'>
                                                    <span className='mr-2 mt-[-2px]'><FontAwesomeIcon icon={faSquare} className='text-[5px] text-primary'></FontAwesomeIcon></span>
                                                    <p className='leading-7'>{feature}</p>
                                                </div>)
                        }
                    </div>
                </div>

                <div id='specifications' className="specifications py-10 border-y border-secondary">
                    <p className='text-left text-4xl font-bold mb-10 to-secondary'>SPECIFICATIONS</p>
                    {
                        Object.entries(specifications).map(entry=><div className='flex text-left border-b py-5'>
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