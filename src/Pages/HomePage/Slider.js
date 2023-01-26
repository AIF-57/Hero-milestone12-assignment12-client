import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./slider.css";

// import required modules
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";


import sliderImg from '../../utilities/images/sliderImg.jpg'
import sliderImg2 from '../../utilities/images/sliderImg_2.jpg'
import sliderImg3 from '../../utilities/images/sliderImg_3.jpg'

const Slider = () => {
    return (
      <div className='h-[80vh]'>
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sliderContents w-full h-full flex " style={{background:`url(${sliderImg3})`,position:'center',backgroundSize:'cover'}}>
              <div className="title text-5xl font-bold">
              <p className='text-base-100 mt-32 ml-5'>BOOST YOUR</p>
              <p className='text-neutral'>RIDE</p>  
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContents w-full h-full flex justify-center items-center" style={{background:`url(${sliderImg})`,position:'center',backgroundSize:'contain'}}>
              <div className="title text-7xl font-bold text-base-100">
              <p>GO ALL WAYS</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContents w-full h-full flex justify-center items-center" style={{background:`url(${sliderImg2})`,position:'center',backgroundSize:'contain'}}>
              <div className="title text-base-100 text-7xl font-bold">
              <p>THIS SHIFTS</p>
              <p className='my-2'>EVERYTHING</p>  
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;