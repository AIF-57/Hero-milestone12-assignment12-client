import React from 'react';
import galleryImg from '../../utilities/gallery/gallery_img1.jpg'
import galleryImg2 from '../../utilities/gallery/gallery_img2.jpg'
import galleryImg3 from '../../utilities/gallery/gallery_img3.jpg'
import galleryImg4 from '../../utilities/gallery/gallery_img4.jpg'
import galleryImg5 from '../../utilities/gallery/gallery_img5.jpg'
import galleryImg6 from '../../utilities/gallery/gallery_img6.jpg'
import galleryImg7 from '../../utilities/gallery/gallery_img7.jpg'
import galleryImg8 from '../../utilities/gallery/gallery_img8.jpg'
import galleryImg9 from '../../utilities/gallery/gallery_img9.jpg'
import galleryImg10 from '../../utilities/gallery/gallery_img10.jpg'
import galleryImg11 from '../../utilities/gallery/gallery_img11.jpg'
import galleryImg12 from '../../utilities/gallery/gallery_img12.jpg'
import galleryImg13 from '../../utilities/gallery/gallery_img13.jpg'
import PrimaryButton from '../Shared/PrimaryButton';
import { Link } from 'react-router-dom';

const ProductGallery = () => {
    return (
        <div className='py-36 pb-20'>
            <div className=' grid grid-cols-5 gap-2 max-w-[1280px] mx-auto'>
                <div className="featuredItem col-span-2 bg-stone-100 flex flex-col items-center justify-center">
                    <p className='text-2xl text-secondary font-semibold'>NEW CONCEPTS</p>
                    <p className='text-lg text-neutral'>Product Line</p>
                    <PrimaryButton>Hello</PrimaryButton>
                </div>
                <div className="featuredItem border">
                    <Link>
                    <img src={galleryImg11} alt="" className='w-full'/>
                    </Link>
                </div>
                <div className="featuredItem border">
                    <Link>
                    <img src={galleryImg13} alt="" className='w-full h-full'/>
                    </Link>
                </div>
                <div className="featuredItem border">
                    <Link>
                    <img src={galleryImg} alt="" className='h-full'/>
                    </Link>
                </div>
                <div className="featuredItem border col-span-3">
                    <Link>
                    <img src={galleryImg12} alt="" className='w-full h-full'/>
                    </Link>
                </div>
                <div className="featuredItem border col-span-2">
                    <Link>
                    <img src={galleryImg8} alt="" />
                    </Link>
                </div>
                <div className="featuredItem border">
                    <Link>
                    <img src={galleryImg4} alt="" />
                    </Link>
                </div>
                <div className="featuredItem border">
                    <Link>
                    <img src={galleryImg2} alt="" />
                    </Link>
                </div>
                <div className="featuredItem border order-10">
                    <Link>
                    <img src={galleryImg10} alt="" />
                    </Link>
                </div>
                <div className="featuredItem border order-10">
                    <Link>
                    <img src={galleryImg9} alt="" />
                    </Link>
                </div>
                <div className="featuredItem border col-span-2 row-span-2">
                    <Link>
                    <img src={galleryImg7} alt="" className='h-full'/>
                    </Link>
                </div>
                <div className="featuredItem border row-span-2">
                    <Link>
                    <img src={galleryImg3} alt="" className='h-full'/>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ProductGallery;